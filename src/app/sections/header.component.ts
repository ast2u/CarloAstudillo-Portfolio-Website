import { Component } from '@angular/core';
import { PROFILE } from '../data/portfolio.data';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header>
      <div class="wrap">
        <nav>
          <a class="logo" href="#top">{{ first }} <b>{{ last }}</b></a>
          <div class="links">
            @for (link of links; track link.href) {
              <a [href]="link.href">{{ link.label }}</a>
            }
            <button class="toggle" type="button" (click)="toggleTheme()" aria-label="Toggle dark mode">Theme</button>
          </div>
        </nav>
      </div>
    </header>
  `
})
export class HeaderComponent {
  readonly first = PROFILE.shortName[0];
  readonly last = PROFILE.shortName[1];
  readonly links = [
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ];

  constructor() {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
      }
    } catch { /* storage unavailable */ }
  }

  toggleTheme(): void {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme');
    const isDark = current === 'dark' || (!current && matchMedia('(prefers-color-scheme: dark)').matches);
    const next = isDark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch { /* ignore */ }
  }
}
