import { Component, OnInit } from '@angular/core';
import { selfInstroduction } from '../entity/self-introduction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = '朱雪元';
    randomNum = 2;
    instroductions: string[] = selfInstroduction;
    //show first tab content
    firstTabFlag = true;
    construction(){ }

    ngOnInit(){
	
    }
    firstTabSelect(){
	this.firstTabFlag = true;
    }
    thirdTabSelect(){
	this.firstTabFlag = false;
	console.log(this.firstTabFlag);
	setInterval(function(){this.randomNum = Math.floor(Math.random()*2+1);console.log(this.randomNum)},1000)
    }
    
}
