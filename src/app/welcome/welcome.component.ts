import { Component, OnInit } from '@angular/core';
import { selfInstroduction } from '../../entity/self-introduction';
import { selfInformation } from '../../entity/self-information';
import { selfInformations } from '../../entity/self-information';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
    instroductions: string[] = selfInstroduction;
    informations:selfInformation = selfInformations;
    informationKeys = Object.keys(this.informations);
    constructor() { }

    ngOnInit() {
    }

}
