import { Component } from "@angular/core";
import { AuthService } from "./modules/core/services";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent {

    constructor(private authService:AuthService){}
}
