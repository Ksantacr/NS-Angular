// Angular
import { Injectable } from "@angular/core";
// Nativescript
import * as dialogs from 'ui/dialogs';
@Injectable()
export class DialogService {
    public alert(msg:string) {
        return dialogs.alert(msg);
    }
    public confirm(msg:string) {
        return dialogs.confirm(msg);
    }
    public prompt(msg:string, defaulText?:string) {
        return dialogs.prompt(msg, defaulText);
    }
    public login(msg:string, userName?:string, password?:string) {
        return dialogs.login(msg, userName, password);
    }
    public action(msg:string, cancelButtonText?:string, actions?: string[]) {
        return dialogs.action(msg, cancelButtonText, actions);
    }
}