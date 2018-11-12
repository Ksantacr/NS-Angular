// Angular
import { NgModule } from "@angular/core";
// App
import { PROVIDERS } from "./services";
import { COMPONENTS } from "./components/";
import { CoreModule } from "../core/core.module";


@NgModule({
    imports:[
        CoreModule
    ],
    providers: [...PROVIDERS],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS]
})
export class PlayerModule {

}