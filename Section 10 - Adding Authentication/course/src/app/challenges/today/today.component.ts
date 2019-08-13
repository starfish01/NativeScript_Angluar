import { Component, OnInit, OnDestroy } from "@angular/core";
import { ChallengeService } from "../challenges.service";
import { Subscription } from "rxjs";
import { Day, DayStatus } from "../day.model";

@Component({
    selector: "ns-today",
    templateUrl: "./today.component.html",
    styleUrls: ["./today.component.scss"]
})
export class TodayComponent implements OnInit, OnDestroy {
    constructor(private challengeService: ChallengeService) {}

    challengeSubscription: Subscription;
    currentDay: Day;

    ngOnInit() {
        this.challengeSubscription = this.challengeService.currentChallenge.subscribe(
            challenge => {
                if(challenge){
                    this.currentDay = challenge.currentDay;
                }
            }
        );
    }

    ngOnDestroy(): void {
        this.challengeSubscription.unsubscribe();
    }

    onActionSelected(action: DayStatus) {
        this.challengeService.updateDayStatus(this.currentDay.dayInMonth, action);
    }

    getActionName() {
        if (this.currentDay.status === DayStatus.Completed) {
            return 'complete';
        }
        if (this.currentDay.status === DayStatus.Failed) {
            return 'fail';
        }
        return null;

    }
}
