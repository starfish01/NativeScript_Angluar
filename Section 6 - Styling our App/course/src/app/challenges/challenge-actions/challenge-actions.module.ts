import { NgModule } from "@angular/core";
import { ChallengeActionsComponent } from "./challenge-actions.component";
import { SharedModule } from "~/app/shared/shared.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";

@NgModule({
    imports: [SharedModule, NativeScriptCommonModule],
    declarations: [ChallengeActionsComponent],
    exports: [ChallengeActionsComponent]
})
export class ChallengeActionsModule {}
