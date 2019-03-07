import { Component } from '@angular/core';
import { selfInstroduction } from '../entity/self-introduction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = '朱雪元';
    instroductions: string[] = selfInstroduction;
    construction(){ }
}
