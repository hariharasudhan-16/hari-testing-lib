import { Inject, Injectable } from '@angular/core';
import { LibConfigService } from './devdactic-lib.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DevdacticLibService {
    constructor(config, http) {
        this.config = config;
        this.http = http;
        console.log('My Config:', config);
    }
}
DevdacticLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: DevdacticLibService, deps: [{ token: LibConfigService }, { token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
DevdacticLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: DevdacticLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: DevdacticLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [LibConfigService]
                }] }, { type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2ZGFjdGljLWxpYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZGV2ZGFjdGljLWxpYi9zcmMvbGliL2RldmRhY3RpYy1saWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBTXJFLE1BQU0sT0FBTyxtQkFBbUI7SUFFOUIsWUFBOEMsTUFBaUIsRUFBVSxJQUFnQjtRQUEzQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUN2RixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDOztnSEFKVSxtQkFBbUIsa0JBRVYsZ0JBQWdCO29IQUZ6QixtQkFBbUIsY0FGbEIsTUFBTTsyRkFFUCxtQkFBbUI7a0JBSC9CLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFHYyxNQUFNOzJCQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGliQ29uZmlnLCBMaWJDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9kZXZkYWN0aWMtbGliLm1vZHVsZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEZXZkYWN0aWNMaWJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KExpYkNvbmZpZ1NlcnZpY2UpIHByaXZhdGUgY29uZmlnOiBMaWJDb25maWcsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyBcbiAgICBjb25zb2xlLmxvZygnTXkgQ29uZmlnOicsIGNvbmZpZyk7XG4gIH19XG4iXX0=