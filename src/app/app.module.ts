import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CoreModule } from "./modules/core/core.module";
import { PlayerModule } from "./modules/player/player.module";
import { AppRoutingModule } from "./app-routing.module";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        AppRoutingModule,
        CoreModule,
        PlayerModule,
    ],
    declarations: [ AppComponent]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
