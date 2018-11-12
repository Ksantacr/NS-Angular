import { Component } from "@angular/core";
import { LogService, DialogService, AuthService } from "../../../core/services";
import { PlayerService } from "../../services";
import { ITrack } from "../../../core/models/track.model";

@Component({
    selector: 'track-list',
    moduleId: module.id,
    templateUrl : './track-list.component.html'
})
export class TrackListComponent {

    constructor(private authService:AuthService, private logService:LogService,
        public playerService:PlayerService, private dialogService:DialogService) {}
    
    public record(track:ITrack, usernameAttempt?:string) {
        
        if(AuthService.CURRENT_USER) {
            this.dialogService.confirm('Are you sure you want to recorded this track?').
            then((ok)=>{
                if(ok)  this._navToRecord(track);
            })
        } else {
            this.authService.promptLogin('Provide an email and password to record', usernameAttempt).
            then((usernameAttempt)=>{
                //initate sequence again
                this.record(track, usernameAttempt);
            })
            
        }
    }

    private _navToRecord(track:ITrack) {
        // TODO: navigate to record screen
    }


}