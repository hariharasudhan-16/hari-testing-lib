import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class PostCardComponent implements OnInit {
    private route;
    expand1: boolean;
    expand2: boolean;
    expand3: boolean;
    expand4: boolean;
    expand5: boolean;
    expand6: boolean;
    items: {
        header: string;
        body: string;
        id: string;
    }[];
    constructor(route: Router);
    ngOnInit(): void;
    back(): void;
    onClickTab1(): void;
    onClickTab2(): void;
    onClickTab3(): void;
    onClickTab4(): void;
    onClickTab5(): void;
    onClickTab6(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PostCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PostCardComponent, "wp-post-card", never, {}, {}, never, never>;
}
