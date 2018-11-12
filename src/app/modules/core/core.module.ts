// Nativescript
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
// Angular
import { NgModule } from "@angular/core";
// App
import { PROVIDERS } from './services';
import { PIPES } from './pipes';

@NgModule({
    imports: [
        NativeScriptModule
    ],
    providers: [...PROVIDERS],
    exports: [
        NativeScriptModule,
        ...PIPES
    ],
    declarations: [...PIPES]
})
export class CoreModule {

}