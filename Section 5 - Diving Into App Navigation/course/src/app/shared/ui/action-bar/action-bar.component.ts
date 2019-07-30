import { Component, OnInit, Input } from "@angular/core";
import { isAndroid, isIOS } from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";
declare var android: any;

@Component({
    selector: "ns-action-bar",
    templateUrl: "./action-bar.component.html",
    styleUrls: ["./action-bar.component.css"]
})
export class ActionBarComponent implements OnInit {


    @Input() title: string;
    @Input() showBackbutton = true;

    constructor(private page: Page, private router: RouterExtensions) {}

    ngOnInit() {}

    onLoadedActionBar() {
        console.log("1");
        if (isAndroid) {
            const androidToolbar = this.page.actionBar.nativeView;

            const backButton = androidToolbar.getNavigationIcon();
            if (backButton) {
                backButton.setColorFilter(
                    android.graphics.Color.parseColor("#171717"),
                    (<any>android.graphics).PorterDuff.Mode.SRC_ATOP
                );
            }
        }
    }

    get canGoBack() {
        return this.router.canGoBack();
    }

    onGoBack() {
        this.router.backToPreviousPage();
    }
}
