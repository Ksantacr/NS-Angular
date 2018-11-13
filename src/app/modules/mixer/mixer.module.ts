import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { PlayerModule } from "../player/player.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { BaseComponent } from "./components/base.component";
import { MixerComponent } from "./components/mixer.component";
import { Routes } from "@angular/router";

const COMPONENTS: any[] = [
    BaseComponent,
    MixerComponent
];

const routes: Routes = [
    {
    path: '',
    component: BaseComponent,
    children: [
        {
        path: 'home',
        component: MixerComponent
        }
    ]
    }
];

@NgModule({
    imports: [
        PlayerModule,
        NativeScriptRouterModule.forChild(routes)
    ],
    declarations: [...COMPONENTS],
    schemas: [NO_ERRORS_SCHEMA]
})
export class MixerModule {}