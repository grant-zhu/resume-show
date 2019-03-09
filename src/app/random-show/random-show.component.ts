import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
@Component({
    selector: 'app-random-show',
    templateUrl: './random-show.component.html',
    styleUrls: ['./random-show.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomShowComponent implements OnInit {
    randomNum = 1;
    constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
      setInterval(()=>{this.randomShow()},10000);
  }

    randomShow(){
	this.randomNum = Math.floor(Math.random()*2+1);
	this.ref.markForCheck();
	console.log(this.randomNum);
    }
}
