import { Component } from '@angular/core';
import { JOBS } from '../data/portfolio.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section id="experience">
      <div class="wrap">
        <h2>Experience</h2>
        @for (job of jobs; track job.when) {
          <article class="job">
            <div class="when">{{ job.when }}</div>
            <div>
              <h3>{{ job.title }}</h3>
              <div class="org">
                <img
                  class="company-logo"
                  [src]="job.logo"
                  [alt]="job.org + ' logo'"
                >
                <span>{{ job.org }}</span>
              </div>
              @if (job.bullets.length) {
                <ul>
                  @for (b of job.bullets; track b) { <li>{{ b }}</li> }
                </ul>
              }
            </div>
          </article>
        }
      </div>
    </section>
  `
})
export class ExperienceComponent {
  readonly jobs = JOBS;
}
