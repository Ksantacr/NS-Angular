// Nativescript
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
// Angular
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
// App
import { PROVIDERS } from "./services";

@NgModule({
    imports: [NativeScriptModule],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [...PROVIDERS]
})
export class RecorderModule {}