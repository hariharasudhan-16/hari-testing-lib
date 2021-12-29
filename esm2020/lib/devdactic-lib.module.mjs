import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DevdacticLibComponent } from './devdactic-lib.component';
import { DevdacticLibService } from './devdactic-lib.service';
import { PostCardComponent } from './post-card/post-card.component';
import * as i0 from "@angular/core";
export const LibConfigService = new InjectionToken('LibConfig');
export class DevdacticLibModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2ZGFjdGljLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9kZXZkYWN0aWMtbGliL3NyYy9saWIvZGV2ZGFjdGljLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBYyxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBTXBFLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUFZLFdBQVcsQ0FBQyxDQUFDO0FBa0IzRSxNQUFNLE9BQU8sa0JBQWtCO0lBRzdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBaUI7UUFDOUIsT0FBTztZQUNMLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsU0FBUyxFQUFFO2dCQUNULG1CQUFtQjtnQkFDbkI7b0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtvQkFDekIsUUFBUSxFQUFFLE1BQU07aUJBQ2pCO2FBQ0Y7U0FDRixDQUFBO0lBQ0gsQ0FBQzs7K0dBZFUsa0JBQWtCO2dIQUFsQixrQkFBa0IsaUJBZDNCLHFCQUFxQjtRQUNyQixpQkFBaUIsYUFHakIsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxZQUFZLGFBR1oscUJBQXFCO1FBQ3JCLGlCQUFpQjtnSEFJUixrQkFBa0IsWUFYcEI7WUFDUCxnQkFBZ0I7WUFDaEIsV0FBVztZQUNYLFlBQVk7U0FDYjsyRkFPVSxrQkFBa0I7a0JBaEI5QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixxQkFBcUI7d0JBQ3JCLGlCQUFpQjtxQkFDbEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjt3QkFDaEIsV0FBVzt3QkFDWCxZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDUCxxQkFBcUI7d0JBQ3JCLGlCQUFpQjtxQkFFbEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGlvblRva2VuLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBEZXZkYWN0aWNMaWJDb21wb25lbnQgfSBmcm9tICcuL2RldmRhY3RpYy1saWIuY29tcG9uZW50JztcbmltcG9ydCB7IERldmRhY3RpY0xpYlNlcnZpY2UgfSBmcm9tICcuL2RldmRhY3RpYy1saWIuc2VydmljZSc7XG5cbmltcG9ydCB7IFBvc3RDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9wb3N0LWNhcmQvcG9zdC1jYXJkLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGliQ29uZmlnIHtcbiAgYXBpVXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBMaWJDb25maWdTZXJ2aWNlID0gbmV3IEluamVjdGlvblRva2VuPExpYkNvbmZpZz4oJ0xpYkNvbmZpZycpO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBEZXZkYWN0aWNMaWJDb21wb25lbnQsXG4gICAgUG9zdENhcmRDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBEZXZkYWN0aWNMaWJDb21wb25lbnQsXG4gICAgUG9zdENhcmRDb21wb25lbnQsXG5cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEZXZkYWN0aWNMaWJNb2R1bGUgeyBcblxuICBcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBMaWJDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPERldmRhY3RpY0xpYk1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGV2ZGFjdGljTGliTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIERldmRhY3RpY0xpYlNlcnZpY2UsXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBMaWJDb25maWdTZXJ2aWNlLFxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxufVxuIl19