
import { AfterViewInit, Component, HostListener } from '@angular/core';
import { PROFILE } from '../data/portfolio.data';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header>
      <div class="wrap">
        <nav>
          <a class="logo" href="#top">
            <img [src]="logoBg" [alt]="first + ' ' + last" class="logo-img">
            <span>{{ first }} <b>{{ last }}</b></span>
          </a>

          <div class="links">
            @for (link of links; track link.href) {
              <a
                [href]="link.href"
                [class.active]="activeSection === link.id"
                [attr.aria-current]="activeSection === link.id ? 'location' : null"
              >
                {{ link.label }}
              </a>
            }

            <button
              class="toggle"
              type="button"
              (click)="toggleTheme()"
              aria-label="Toggle dark mode"
            >
              Theme
            </button>
          </div>
        </nav>
      </div>
    </header>
  `
})
export class HeaderComponent implements AfterViewInit {
  readonly logoBg = PROFILE.shortNameLogo;
  readonly first = PROFILE.shortName[0];
  readonly last = PROFILE.shortName[1];

  readonly links = [
    { id: 'experience', href: '#experience', label: 'Experience' },
    { id: 'skills', href: '#skills', label: 'Skills' },
    { id: 'projects', href: '#projects', label: 'Projects' },
    { id: 'education', href: '#education', label: 'Education' },
    { id: 'contact', href: '#contact', label: 'Contact' }
  ];

  activeSection = '';

  ngAfterViewInit(): void {
    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateActiveSection();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const activationPoint = 120;
    let currentSection = '';

    for (const link of this.links) {
      const section = document.getElementById(link.id);

      if (!section) continue;

      const rect = section.getBoundingClientRect();

      if (rect.top <= activationPoint) {
        currentSection = link.id;
      }
    }

    // Highlight Contact when the bottom of the page is reached.
    const atPageBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 5;

    if (atPageBottom) {
      currentSection = 'contact';
    }

    this.activeSection = currentSection;
  }

  constructor() {
    try {
      const saved = localStorage.getItem('theme');

      if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
      }
    } catch {
      /* storage unavailable */
    }
  }

  toggleTheme(): void {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme');

    const isDark =
      current === 'dark' ||
      (!current && matchMedia('(prefers-color-scheme: dark)').matches);

    const next = isDark ? 'light' : 'dark';

    root.setAttribute('data-theme', next);

    try {
      localStorage.setItem('theme', next);
    } catch {
      /* ignore */
    }
  }
}
