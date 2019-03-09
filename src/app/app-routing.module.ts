import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
import { PersonalSkillComponent } from './personal-skill/personal-skill.component';
import { ProjectExperienceComponent } from './project-experience/project-experience.component';
import { RandomShowComponent } from './random-show/random-show.component';
 
const appRoutes: Routes = [
    { path: 'personal-skill', component: PersonalSkillComponent },
    { path: 'project-experience', component: ProjectExperienceComponent },
    { path: 'about-me', component: RandomShowComponent },
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
