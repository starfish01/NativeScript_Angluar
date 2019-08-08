import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ChallengeEditComponent } from "./challenge-edit.component";
import { SharedModule } from "~/app/shared/shared.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    declarations: [ChallengeEditComponent],
    imports: [
        SharedModule,
        NativeScriptCommonModule,
        // NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            { path: "", component: ChallengeEditComponent }
        ]),
        NativeScriptFormsModule
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class ChallengeEditeModule {}
