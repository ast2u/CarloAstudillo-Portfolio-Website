import { Component } from '@angular/core';
import { PROFILE } from '../data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact" class="contact">
      <div class="wrap">
        <h2>Let’s work together</h2>
        <p>I’m open to backend, DevOps and full-stack roles. The fastest way to reach me is email.</p>
        <div class="social">
          <a class="btn primary" [href]="'mailto:' + p.email">Email me</a>
          <a class="btn" [href]="p.github" target="_blank" rel="noopener">GitHub</a>
          <a class="btn" [href]="p.linkedin" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  readonly p = PROFILE;
}
