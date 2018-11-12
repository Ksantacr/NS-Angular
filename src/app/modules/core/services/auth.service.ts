// Angular
import { Injectable } from "@angular/core";
// Lib
import { BehaviorSubject } from 'rxjs';
// App
import { DatabaseService } from "./database.service";
import { LogService } from "./log.service";
import { DialogService } from "./dialog.service";
@Injectable()
export class AuthService {

    //access our current user from anywhere
    public static CURRENT_USER:any;

    //suscribe to authenticated state changes
    public authenticated$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(private databaseService:DatabaseService, private dialogService:DialogService,private logService:LogService){
        this._init();
    }

    private _init() {
        AuthService.CURRENT_USER = this.databaseService.getItem(DatabaseService.KEYS.currentUser);
        this.logService.debug(`Current user: `, AuthService.CURRENT_USER);
        this._notifyState(!!AuthService.CURRENT_USER);
    }

    private _notifyState(auth :boolean) {
        this.authenticated$.next(auth);
    }

    public promptLogin(msg:string, username:string = ''):Promise<any> {
        return new Promise((resolve, reject)=> {
            this.dialogService.login(msg, username, '').
            then((input)=> {
                if(input.result) { //result false if canceled
                    if(input.userName && input.userName.indexOf('@') > -1) {
                        if(input.password) {
                            //persist user credentials
                            this._saveUser(input.userName, input.password);
                        }
                        resolve();
                    } else {
                        this.dialogService.alert('You must provide a password').
                        then(reject.bind(this, input.userName));
                    }
                } else {
                    // reject, passing userName back
                    this.dialogService.alert('You must provide a valid email address').
                    then(reject.bind(this, input.userName));
                }
            })
        });
    }

    private _saveUser(username:string, password:string) {
        AuthService.CURRENT_USER = {username, password};
        this.databaseService.setItem(DatabaseService.KEYS.currentUser, AuthService.CURRENT_USER);
        this._notifyState(true);
    }

}