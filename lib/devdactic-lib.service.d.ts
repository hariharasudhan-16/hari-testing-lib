import { LibConfig } from './devdactic-lib.module';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class DevdacticLibService {
    private config;
    private http;
    constructor(config: LibConfig, http: HttpClient);
    static ɵfac: i0.ɵɵFactoryDeclaration<DevdacticLibService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DevdacticLibService>;
}
