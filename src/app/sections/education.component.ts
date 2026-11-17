import { Component } from '@angular/core';
import { AWARDS, EDUCATION } from '../data/portfolio.data';

@Component({
  selector: 'app-education',
  standalone: true,
  template: `
    <section id="education">
      <div class="wrap">
        <h2>Education & awards</h2>
        <div class="two">
          <div>
            <h3>Education</h3>
            @for (e of education; track e.title) {
              <div class="item"><b>{{ e.title }}</b><span>{{ e.detail }}</span></div>
            }
          </div>
          <div>
            <h3>Awards</h3>
            @for (a of awards; track a.title) {
              <div class="item"><b>{{ a.title }}</b><span>{{ a.detail }}</span></div>
            }
          </div>
        </div>
      </div>
    </section>
  `
})
export class EducationComponent {
  readonly education = EDUCATION;
  readonly awards = AWARDS;
}
