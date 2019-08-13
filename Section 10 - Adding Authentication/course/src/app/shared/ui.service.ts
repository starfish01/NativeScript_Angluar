import { Injectable, ViewContainerRef } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class UiService {
    private _drawerState = new BehaviorSubject<void>(null);
    private _rootVCR: ViewContainerRef;

    constructor() {}

    get drawerState() {
        return this._drawerState.asObservable();
    }

    toggleDrawer() {
        this._drawerState.next(null);
    }

    seRootVCRef (vcRef: ViewContainerRef){
        this._rootVCR = vcRef;
    }

    getRootVCRef(){
        return this._rootVCR;
    }
}
