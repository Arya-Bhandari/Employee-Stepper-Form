import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepsComponent } from './component/steps/steps.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BasicDetailsComponent } from './component/basic-details/basic-details.component';
import { SkillsComponent } from './component/skills/skills.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { provideHttpClient } from '@angular/common/http';
import { EmpTableComponent } from './component/emp-table/emp-table.component';


@NgModule({
  declarations: [
    AppComponent,
    StepsComponent,
    BasicDetailsComponent,
    SkillsComponent,
    ExperienceComponent,
    EmpTableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
