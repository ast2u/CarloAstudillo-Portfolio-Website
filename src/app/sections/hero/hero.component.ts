import { Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  styleUrl: 'hero.component.css',
  template: `
    <div class="wrap hero" id="top">
      <div class="hero-grid">
        <div>
          <h1 class="hero-headline">
            <span class="auto-type"></span>
          </h1>
          <p class="lead">{{ p.lead }}</p>
          <div class="btns">
            <a class="btn primary" href="#contact">Get in touch</a>
            <a class="btn" href="#projects">See my work</a>
            <a class="btn" [href]="p.cv" download>Download CV</a>
          </div>
          <div class="facts">
            @for (f of p.facts; track f.label) {
              <div><strong>{{ f.label }}</strong>{{ f.value }}</div>
            }
          </div>
        </div>
        <div class="portrait" [style.--portrait-bg]="'url(' + p.photoBg + ')'" ]>
          <img [src]="p.photo" alt="Portrait of Carlo Astudillo" width="380" height="460">
          <div class="panel" aria-hidden="true">
            <div class="bar">
                <span>kubectl get pods</span><span>prod</span>
            </div>
            @for (pod of pods; track pod.name) {
              <div class="row"><span>
              <i class="dot"></i>{{ pod.name }}
              </span><span>Running</span><span>
              {{ pod.ready }}</span></div>
            }
          </div>
        </div>
      </div>
    </div>
  `
})
export class HeroComponent {
  readonly p = PROFILE;
  readonly pods = [
    { name: 'billing-service', ready: '2/2' },
    { name: 'trading-service', ready: '2/2' },
    { name: 'customer-service', ready: '2/2' },
    { name: 'data-sync-job', ready: '1/1' }
  ];
}
