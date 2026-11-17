
import { Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  styleUrl: 'contact.component.css',
  template: `
    <section id="contact" class="contact">
      <div class="wrap">
        <h2>Let’s work together</h2>
        <p>
          I’m open to backend, DevOps and full-stack opportunities.
          Feel free to reach out or connect with me through my profiles.
        </p>

        <div class="social">
          <a class="btn primary" [href]="'mailto:' + p.email">
            <span>✉</span> Email me
          </a>

          <a class="btn" [href]="p.github" target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>

          <a class="btn" [href]="p.linkedin" target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>

          @if (p.jobstreet) {
            <a class="btn" [href]="p.jobstreet" target="_blank" rel="noopener noreferrer">
              JobStreet ↗
            </a>
          }
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  readonly p = PROFILE;
}
