import { Component, OnInit, Input } from "@angular/core";
import { isAndroid, isIOS } from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";
import { UiService } from "../../ui.service";
declare var android: any;

@Component({
    selector: "ns-action-bar",
    templateUrl: "./action-bar.component.html",
    styleUrls: ["./action-bar.component.css"]
})
export class ActionBarComponent implements OnInit {


    @Input() title: string;
    @Input() showBackbutton = true;
    @Input() hasMenu = true;

    constructor(private page: Page, private router: RouterExtensions, private ui: UiService) {}

    ngOnInit() {}

    get android() {
        return isAndroid;
    }

    onLoadedActionBar() {
        if (isAndroid) {
            const androidToolbar = this.page.actionBar.nativeView;
            let btnColour = "#171717"
            if(this.hasMenu) {
                let btnColour = "#FFFFFF"
            }

            const backButton = androidToolbar.getNavigationIcon();
            if (backButton) {
                backButton.setColorFilter(
                    android.graphics.Color.parseColor(btnColour),
                    (<any>android.graphics).PorterDuff.Mode.SRC_ATOP
                );
            }
        }
    }

    get canGoBack() {
        return this.router.canGoBack() && this.showBackbutton;
    }

    onGoBack() {
        this.router.backToPreviousPage();
    }

    onToggleMenu() {
        this.ui.toggleDrawer();
    }
}
