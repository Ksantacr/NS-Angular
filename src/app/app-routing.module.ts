import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/mixer/home',
        pathMatch: 'full'
    },
    {
        path: 'mixer',
        loadChildren: () => require('./modules/mixer/mixer.module')['MixerModule']
    },
    {
        path: 'record',
        loadChildren: () => require('./modules/recorder/recorder.module')['RecorderModule']
    }
        
];

@NgModule({
    imports: [
    NativeScriptRouterModule.forRoot(routes)
    ],
    exports: [
    NativeScriptRouterModule
    ]
})   
export class AppRoutingModule { }
