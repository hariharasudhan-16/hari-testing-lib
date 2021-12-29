import * as i0 from '@angular/core';
import { Component, InjectionToken, NgModule, Injectable, Inject } from '@angular/core';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import * as i2 from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import * as i1 from '@angular/router';

class DevdacticLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
DevdacticLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: DevdacticLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DevdacticLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: DevdacticLibComponent, selector: "wp-devdactic-lib", ngImport: i0, template: `
    <p>
      devdactic-lib works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: DevdacticLibComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'wp-devdactic-lib',
                    template: `
    <p>
      devdactic-lib works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class PostCardComponent {
    constructor(route) {
        this.route = route;
        this.expand1 = false;
        this.expand2 = false;
        this.expand3 = false;
        this.expand4 = false;
        this.expand5 = false;
        this.expand6 = false;
        this.items = [
            { header: "How many devices can I register?", body: "When you log into Ultimatix apps through any mobile device for the first time, the device gets tagged to your Employee ID & hence the device is called a ‘tagged device’ The list of tagged devices can be viewed on: Option 1. Ultimatix Apps web portal: ‘https://usapps.ultimatix.net' under ‘Your Devices’ section. Option 2. Ultimatix apps mobile app: Sttings -> Your Devices.", id: "tab-one" },
            { header: "Can apps inside Ultimatix apps be updated automatically?", body: "When you log into Ultimatix apps through any mobile device for the first time, the device gets tagged to your Employee ID & hence the device is called a ‘tagged device’ The list of tagged devices can be viewed on: Option 1. Ultimatix Apps web portal: ‘https://usapps.ultimatix.net' under ‘Your Devices’ section. Option 2. Ultimatix apps mobile app: Sttings -> Your Devices.", id: "tab-two" },
            { header: "Will I be reimbursed for the data charges & devices incurred?", body: "When you log into Ultimatix apps through any mobile device for the first time, the device gets tagged to your Employee ID & hence the device is called a ‘tagged device’ The list of tagged devices can be viewed on: Option 1. Ultimatix Apps web portal: ‘https://usapps.ultimatix.net' under ‘Your Devices’ section. Option 2. Ultimatix apps mobile app: Sttings -> Your Devices.", id: "tab-three" },
            { header: "What is tagged device?", body: "When you log into Ultimatix apps through any mobile device for the first time, the device gets tagged to your Employee ID & hence the device is called a ‘tagged device’ The list of tagged devices can be viewed on: Option 1. Ultimatix Apps web portal: ‘https://usapps.ultimatix.net' under ‘Your Devices’ section. Option 2. Ultimatix apps mobile app: Sttings -> Your Devices.", id: "tab-four" },
            { header: "Why am I not receiving notifications from Ultimatix apps on my android device?", body: "When you log into Ultimatix apps through any mobile device for the first time, the device gets tagged to your Employee ID & hence the device is called a ‘tagged device’ The list of tagged devices can be viewed on: Option 1. Ultimatix Apps web portal: ‘https://usapps.ultimatix.net' under ‘Your Devices’ section. Option 2. Ultimatix apps mobile app: Sttings -> Your Devices.", id: "tab-five" },
            { header: "Login screen appears again even after logging in to https://uxapps.ultimatix.net. Why?", body: "When you log into Ultimatix apps through any mobile device for the first time, the device gets tagged to your Employee ID & hence the device is called a ‘tagged device’ The list of tagged devices can be viewed on: Option 1. Ultimatix Apps web portal: ‘https://usapps.ultimatix.net' under ‘Your Devices’ section. Option 2. Ultimatix apps mobile app: Sttings -> Your Devices.", id: "tab-six" },
        ];
    }
    ngOnInit() {
    }
    back() {
        this.route.navigate(['']);
    }
    onClickTab1() {
        this.expand1 = !this.expand1;
    }
    onClickTab2() {
        this.expand2 = !this.expand2;
    }
    onClickTab3() {
        this.expand3 = !this.expand3;
    }
    onClickTab4() {
        this.expand4 = !this.expand4;
    }
    onClickTab5() {
        this.expand5 = !this.expand5;
    }
    onClickTab6() {
        this.expand6 = !this.expand6;
    }
}
PostCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: PostCardComponent, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Component });
PostCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: PostCardComponent, selector: "wp-post-card", ngImport: i0, template: "<ion-header>\n    <ion-toolbar class=\"appbar_background\">\n      <ion-icon\n        name=\"chevron-back-outline\"\n        slot=\"start\"\n        (click)=\"back()\"\n        class=\"ion-icon\"\n      ></ion-icon>\n      <ion-title class=\"toolbar-title\">FAQs </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <div style=\"background-color: #4d2f9e\">\n      <div class=\"top-border\">\n        <div class=\"tab-group\">\n          <div class=\"tab\" *ngFor=\"let item of items\">\n            <input type=\"checkbox\" [id]=\"item.id\" name=\"tabs\" />\n            <label [for]=\"item.id\" (click)=\"onClickTab1()\">\n              <ion-row>\n                <ion-col size=\"11\">\n                  <p class=\"itemLabel\">{{ item.header }}</p>\n                </ion-col>\n                <ion-col size=\"1\" class=\"icon\">\n                  <ion-icon\n                    name=\"chevron-down-outline\"\n                    *ngIf=\"!expand1\"\n                  ></ion-icon>\n                  <ion-icon name=\"chevron-up-outline\" *ngIf=\"expand1\"></ion-icon>\n                </ion-col>\n              </ion-row>\n            </label>\n            <div class=\"tab-content\">\n              <p>\n                {{ item.body }}\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ion-content>\n  ", styles: ["label p{margin:0%;width:284px}ion-col{padding:0%}ion-col ion-icon{align-self:center}.itemLabel{text-align:left;font: 4.5vw/1.5 Roboto;letter-spacing:.01px;color:#000;opacity:1}.tab-group{width:100%}.tab{position:relative;border-bottom:1px solid #d9d9d9}.tab input{position:absolute;left:0;top:0;opacity:0}.tab label{display:block;padding-left:16px;padding-bottom:18px;padding-top:18px}.icon{display:flex;align-items:center}.tab input:focus+label,.tab label:hover{background:#ffffff00;transition:.3s}.tab-content{max-height:0;overflow:hidden;transition:all .5s}.tab-content p{text-align:left;font: 3.3vw/1.6 Roboto;letter-spacing:0px;color:#656565;opacity:1;margin:8px 20px 18px 16px}.tab input:checked~.tab-content{max-height:20em;background:#ffffff00}\n"], components: [{ type: i2.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i2.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i2.IonIcon, selector: "ion-icon", inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }, { type: i2.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i2.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i2.IonRow, selector: "ion-row" }, { type: i2.IonCol, selector: "ion-col", inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] }], directives: [{ type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: PostCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'wp-post-card', template: "<ion-header>\n    <ion-toolbar class=\"appbar_background\">\n      <ion-icon\n        name=\"chevron-back-outline\"\n        slot=\"start\"\n        (click)=\"back()\"\n        class=\"ion-icon\"\n      ></ion-icon>\n      <ion-title class=\"toolbar-title\">FAQs </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <div style=\"background-color: #4d2f9e\">\n      <div class=\"top-border\">\n        <div class=\"tab-group\">\n          <div class=\"tab\" *ngFor=\"let item of items\">\n            <input type=\"checkbox\" [id]=\"item.id\" name=\"tabs\" />\n            <label [for]=\"item.id\" (click)=\"onClickTab1()\">\n              <ion-row>\n                <ion-col size=\"11\">\n                  <p class=\"itemLabel\">{{ item.header }}</p>\n                </ion-col>\n                <ion-col size=\"1\" class=\"icon\">\n                  <ion-icon\n                    name=\"chevron-down-outline\"\n                    *ngIf=\"!expand1\"\n                  ></ion-icon>\n                  <ion-icon name=\"chevron-up-outline\" *ngIf=\"expand1\"></ion-icon>\n                </ion-col>\n              </ion-row>\n            </label>\n            <div class=\"tab-content\">\n              <p>\n                {{ item.body }}\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ion-content>\n  ", styles: ["label p{margin:0%;width:284px}ion-col{padding:0%}ion-col ion-icon{align-self:center}.itemLabel{text-align:left;font: 4.5vw/1.5 Roboto;letter-spacing:.01px;color:#000;opacity:1}.tab-group{width:100%}.tab{position:relative;border-bottom:1px solid #d9d9d9}.tab input{position:absolute;left:0;top:0;opacity:0}.tab label{display:block;padding-left:16px;padding-bottom:18px;padding-top:18px}.icon{display:flex;align-items:center}.tab input:focus+label,.tab label:hover{background:#ffffff00;transition:.3s}.tab-content{max-height:0;overflow:hidden;transition:all .5s}.tab-content p{text-align:left;font: 3.3vw/1.6 Roboto;letter-spacing:0px;color:#656565;opacity:1;margin:8px 20px 18px 16px}.tab input:checked~.tab-content{max-height:20em;background:#ffffff00}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });

const LibConfigService = new InjectionToken('LibConfig');
class DevdacticLibModule {
    static forRoot(config) {
        return {
            ngModule: DevdacticLibModule,
            providers: [
                DevdacticLibService,
                {
                    provide: LibConfigService,
                    useValue: config
                }
            ]
        };
    }
}
DevdacticLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: DevdacticLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DevdacticLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: DevdacticLibModule, declarations: [DevdacticLibComponent,
        PostCardComponent], imports: [HttpClientModule,
        IonicModule,
        CommonModule], exports: [DevdacticLibComponent,
        PostCardComponent] });
DevdacticLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: DevdacticLibModule, imports: [[
            HttpClientModule,
            IonicModule,
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: DevdacticLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DevdacticLibComponent,
                        PostCardComponent
                    ],
                    imports: [
                        HttpClientModule,
                        IonicModule,
                        CommonModule
                    ],
                    exports: [
                        DevdacticLibComponent,
                        PostCardComponent,
                    ]
                }]
        }] });

class DevdacticLibService {
    constructor(config, http) {
        this.config = config;
        this.http = http;
        console.log('My Config:', config);
    }
}
DevdacticLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: DevdacticLibService, deps: [{ token: LibConfigService }, { token: i1$1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
DevdacticLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: DevdacticLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: DevdacticLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [LibConfigService]
                }] }, { type: i1$1.HttpClient }]; } });

/*
 * Public API Surface of devdactic-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DevdacticLibComponent, DevdacticLibModule, DevdacticLibService, LibConfigService, PostCardComponent };
//# sourceMappingURL=hariharasudhan-16-devdactic-lib.mjs.map
