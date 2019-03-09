import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { PersonalSkillComponent } from './personal-skill/personal-skill.component';
import { ProjectExperienceComponent } from './project-experience/project-experience.component';
import { AppRoutingModule } from './app-routing.module';
import { RandomShowComponent } from './random-show/random-show.component'
@NgModule({
  declarations: [
    AppComponent,
    PersonalSkillComponent,
    ProjectExperienceComponent,
    RandomShowComponent
  ],
  imports: [
      BrowserModule,
      TabsModule.forRoot(),
      AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
