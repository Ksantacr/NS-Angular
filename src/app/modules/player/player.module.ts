// Nativescript
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
// Angular
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { PROVIDERS } from "./services";
import { COMPONENTS } from "./components/";
import { CoreModule } from "../core/core.module";


@NgModule({
    imports: [CoreModule],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [...PROVIDERS],
    declarations: [...COMPONENTS]
})
export class PlayerModule {

}