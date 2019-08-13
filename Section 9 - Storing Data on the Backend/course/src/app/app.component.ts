import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, ChangeDetectorRef, ViewContainerRef } from "@angular/core";
import { UiService } from "./shared/ui.service";
import { Subscription } from "rxjs";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {

    @ViewChild(RadSideDrawerComponent, { static: false }) drawerComponent: RadSideDrawerComponent;

    activeChallenge: string = '';
    private drawerSub: Subscription;
    private drawer: RadSideDrawer;
    private vcRef: ViewContainerRef;


    onChallengeInput(challengeDescription: string) {
        this.activeChallenge = challengeDescription;
    }

    constructor(private ui: UiService, private changeDirectionRef: ChangeDetectorRef){

    }

    ngOnInit(): void {
        this.drawerSub = this.ui.drawerState.subscribe(()=>{
            if(this.drawer){
                this.drawer.toggleDrawerState();
            }
        });
        this.ui.seRootVCRef(this.vcRef);
    }

    ngOnDestroy(): void {
        if(this.drawerSub) {
            this.drawerSub.unsubscribe();
        }
    }

    ngAfterViewInit(): void {
        this.drawer = this.drawerComponent.sideDrawer;

        this.changeDirectionRef.detectChanges();
    }

    onLogout() {
        this.ui.toggleDrawer();
    }



}
