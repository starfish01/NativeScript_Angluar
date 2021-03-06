import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { CurrentChallengeComponent } from "./challenge/current-challenge/current-challenge.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { StackComponent } from "./layouts/stack/stack.component";
import { FlexboxComponent } from "./layouts/flexbox/flexbox.component";
import { AssignmentComponent } from "./layouts/assignment/assignment.component";
import { GridComponent } from "./layouts/grid/grid.component";
import { AbsoluteComponent } from "./layouts/absolute/absolute.component";
import { ChallengeEditComponent } from "./challenge/challenge-edit/challenge-edit.component";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, NativeScriptFormsModule],
    declarations: [
        AppComponent,
        CurrentChallengeComponent,
        StackComponent,
        FlexboxComponent,
        AssignmentComponent,
        GridComponent,
        AbsoluteComponent,
        ChallengeEditComponent
    ],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
