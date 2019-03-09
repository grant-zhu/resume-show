import { Component, OnInit } from '@angular/core';
import { selfInstroduction } from '../entity/self-introduction';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    title = '朱雪元';
    instroductions: string[] = selfInstroduction;
    // constructor(private router:Router,private ref: ChangeDetectorRef){ }
    constructor(){ }
    ngOnInit(){
	
    }
}
