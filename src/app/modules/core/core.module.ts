// Nativescript
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
// Angular
import { NgModule } from "@angular/core";
// App
import { PROVIDERS } from './services';

@NgModule({
    imports: [
        NativeScriptModule
    ],
    providers: [...PROVIDERS],
    exports: [
        NativeScriptModule
    ]
})
export class CoreModule {

}