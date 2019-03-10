import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    title = 'Grant Zhu';
    btnClick = 0;

    // constructor(private router:Router,private ref: ChangeDetectorRef){ }
    constructor(){ }
    ngOnInit(){
	
    }
}
