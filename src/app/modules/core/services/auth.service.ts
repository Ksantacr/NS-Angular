// Angular
import { Injectable } from "@angular/core";
// Lib
import { BehaviorSubject } from 'rxjs';
// App
import { DatabaseService } from "./database.service";
import { LogService } from "./log.service";
@Injectable()
export class AuthService {

    //access our current user from anywhere
    public static CURRENT_USER:any;

    //suscribe to authenticated state changes
    public authenticated$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(private databaseService:DatabaseService, private logService:LogService){
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

}