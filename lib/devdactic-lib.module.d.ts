import { InjectionToken, ModuleWithProviders } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./devdactic-lib.component";
import * as i2 from "./post-card/post-card.component";
import * as i3 from "@angular/common/http";
import * as i4 from "@ionic/angular";
import * as i5 from "@angular/common";
export interface LibConfig {
    apiUrl: string;
}
export declare const LibConfigService: InjectionToken<LibConfig>;
export declare class DevdacticLibModule {
    static forRoot(config: LibConfig): ModuleWithProviders<DevdacticLibModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DevdacticLibModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DevdacticLibModule, [typeof i1.DevdacticLibComponent, typeof i2.PostCardComponent], [typeof i3.HttpClientModule, typeof i4.IonicModule, typeof i5.CommonModule], [typeof i1.DevdacticLibComponent, typeof i2.PostCardComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DevdacticLibModule>;
}
