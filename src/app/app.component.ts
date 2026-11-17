import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { PROFILE } from './data/portfolio.data';
import { HeaderComponent } from './sections/header.component';
import { HeroComponent } from './sections/hero.component';
import { ExperienceComponent } from './sections/experience.component';
import { ProjectsComponent } from './sections/projects.component';
import { SkillsComponent } from './sections/skills.component';
import { EducationComponent } from './sections/education.component';
import { ContactComponent } from './sections/contact.component';

declare const Typed: new (
  selector: string,
  options: {
    strings: string[];
    typeSpeed: number;
    backSpeed: number;
    loop: boolean;
  }
) => { destroy(): void };

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent
  ],
  template: `
    <app-header />
    <main>
      <app-hero />
      <app-skills />
      <app-experience />
      <app-projects />
      <app-education />
      <app-contact />
    </main>
    <footer>
      <div class="wrap">© {{ year }} {{ name }}</div>
    </footer>
  `
})
export class AppComponent implements AfterViewInit, OnDestroy {
  readonly year = new Date().getFullYear();
  readonly name = PROFILE.name;
  readonly headline = PROFILE.headline;

  private typedInstance?: { destroy(): void };

  ngAfterViewInit(): void {
    this.initializeTyping();
  }

  ngOnDestroy(): void {
    this.typedInstance?.destroy();
  }

  private initializeTyping(): void {
    this.typedInstance = new Typed('.auto-type', {
      strings: [this.headline],
      typeSpeed: 35,
      backSpeed: 40,
      loop: false
    });
  }
}