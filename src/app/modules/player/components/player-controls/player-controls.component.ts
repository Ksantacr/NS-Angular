// Angular
import { Component } from "@angular/core";
import { LogService } from "../../../core/services";
import { PlayerService } from "../../services";

@Component({
    selector: 'player-controls',
    moduleId: module.id,
    templateUrl: './player-controls.component.html'
})
export class PlayerControlsComponent {

    public currentTime: number = 0;
    public duration:number = 100;
    public playStatus:string = 'Play';

    constructor(private logService:LogService, private playerService:PlayerService) {}

    togglePlay() {
        let playing = !this.playerService.playing;
        this.playerService.playing = playing;
        this.playStatus = playing ? 'Stop' : 'Play';
    }

}