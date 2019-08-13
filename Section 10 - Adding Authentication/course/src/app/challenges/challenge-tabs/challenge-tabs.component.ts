import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import { ChallengeService } from "../challenges.service";

@Component({
    selector: "ns-challenge-tabs",
    templateUrl: "./challenge-tabs.component.html",
    styleUrls: ["./challenge-tabs.component.css"]
})
export class ChallengeTabsComponent implements OnInit {
    constructor(
        private router: RouterExtensions,
        private active: ActivatedRoute,
        private page: Page,
        private challengeService: ChallengeService
    ) {}

    isLoading = false;

    ngOnInit() {
        this.isLoading = true;
        this.challengeService.fetchCurrentChallenge().subscribe(
            res => {

                console.log(res);
                this.isLoading = false;
                this.loadTabRoutes();
            },
            err => {
                this.isLoading = false;
            }
        );


        this.page.actionBarHidden = true;
    }

    private loadTabRoutes() {
        setTimeout(() => {
            this.router.navigate(
                [
                    {
                        outlets: {
                            currentChallenge: ["current-challenge"],
                            today: ["today"]
                        }
                    }
                ],
                {
                    relativeTo: this.active
                }
            );
        }, 10);
    }
}
