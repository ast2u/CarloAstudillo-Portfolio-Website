import { Component } from '@angular/core';
import { PROFILE } from './data/portfolio.data';
import { HeaderComponent } from './sections/header.component';
import { HeroComponent } from './sections/hero.component';
import { ExperienceComponent } from './sections/experience.component';
import { ProjectsComponent } from './sections/projects.component';
import { SkillsComponent } from './sections/skills.component';
import { EducationComponent } from './sections/education.component';
import { ContactComponent } from './sections/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, ExperienceComponent, ProjectsComponent, SkillsComponent, EducationComponent, ContactComponent],
  template: `
    <app-header />
    <main>
      <app-hero />
      <app-experience />
      <app-projects />
      <app-skills />
      <app-education />
      <app-contact />
    </main>
    <footer>
      <div class="wrap">© {{ year }} {{ name }}</div>
    </footer>
  `
})
export class AppComponent {
  readonly year = new Date().getFullYear();
  readonly name = PROFILE.name;
}
