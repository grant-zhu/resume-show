import { Component,Input, OnInit } from '@angular/core';
import { personalSkill,personalSkills } from '../../entity/personal-skills';
import * as d3 from 'd3';
import {ViewEncapsulation} from '@angular/core'

@Component({
    selector: 'app-personal-skill',
    templateUrl: './personal-skill.component.html',
    styleUrls: ['./personal-skill.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class PersonalSkillComponent implements OnInit {
    skill:personalSkill[]=personalSkills;
    constructor() { }
    ngOnInit() {
	this.drawBarChart();
    }
    //this.flag = false;
    //if used by multiple page
    drawBarChart():void{
	d3.select("#skill")
	    .selectAll("div")
	    .data(this.skill)
	    .enter()
	    .append("div")
	    .text(function(d){ return d.skill});
	d3.select("#chart")
	    .selectAll("div")
	    .data(this.skill)
	    .enter()
	    .append("div")
	    .style("width", function(d) { return d.abilityNum*4 + "px"; })
	    .text(function(d) { return d.abilityNum; });
    }
}
