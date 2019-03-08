import { Component, OnInit } from '@angular/core';
import { projectExperience, ProjectExperiences } from '../../entity/project-experiences';
@Component({
  selector: 'app-project-experience',
  templateUrl: './project-experience.component.html',
  styleUrls: ['./project-experience.component.css']
})
export class ProjectExperienceComponent implements OnInit {
    experiences:projectExperience[] = ProjectExperiences;

    constructor() { }

    ngOnInit() {
	
    }

}
