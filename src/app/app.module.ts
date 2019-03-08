import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { PersonalSkillComponent } from './personal-skill/personal-skill.component';
import { ProjectExperienceComponent } from './project-experience/project-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalSkillComponent,
    ProjectExperienceComponent
  ],
  imports: [
      BrowserModule,
      TabsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
