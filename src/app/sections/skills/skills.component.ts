import { Component } from '@angular/core';
import { SKILLS } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  styleUrl: 'skills.component.css',
  template: `
    <section id="skills">
      <div class="wrap">
        <h2>Skills</h2>
        <div class="skills">
          @for (group of groups; track group.title) {
            <div>
              <h3>{{ group.title }}</h3>
              <div class="tags">
                @for (item of group.items; track item) { <span class="tag">{{ item }}</span> }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent {
  readonly groups = SKILLS;
}
