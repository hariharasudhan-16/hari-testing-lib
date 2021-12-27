import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PostCardComponent implements OnInit {
    navigateBack: EventEmitter<any>;
    expand1: boolean;
    expand2: boolean;
    expand3: boolean;
    expand4: boolean;
    expand5: boolean;
    expand6: boolean;
    questionList: any;
    constructor();
    FaqList: any;
    ngOnInit(): void;
    back(): void;
    onClickTab(i: any): void;
    onClickTab2(): void;
    onClickTab3(): void;
    onClickTab4(): void;
    onClickTab5(): void;
    onClickTab6(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PostCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PostCardComponent, "wp-post-card", never, {}, { "navigateBack": "navigateBack"; }, never, never>;
}
