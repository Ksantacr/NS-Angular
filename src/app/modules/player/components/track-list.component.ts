import { Component } from "@angular/core";
import { LogService } from "../../core/services";
import { PlayerService } from "../services";
import { ITrack } from "../../core/models/track.model";

@Component({
    moduleId: module.id,
    selector: 'track-list',
    templateUrl : 'track-list.component.html'
})
export class TrackListComponent {

    constructor(private logService:LogService,
        public playerService:PlayerService) {}
    
    public record(track:ITrack) {
        this.logService.inspect(track);
    }


}