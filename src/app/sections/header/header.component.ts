
import { AfterViewInit, Component, HostListener } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-header',
  standalone: true,
  styleUrl: 'header.component.css',
  template: `
    <header>
      <div class="wrap">
        <nav>
          <a class="logo" href="#top" (click)="closeMenu()">
            <img [src]="logoBg" [alt]="first + ' ' + last" class="logo-img">
            <span>{{ first }} <b>{{ last }}</b></span>
          </a>

          <div class="nav-actions">
            <!-- Theme toggle stays outside the hamburger menu -->
            <button
              class="toggle theme-toggle"
              type="button"
              (click)="toggleTheme()"
              [attr.aria-label]="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
              [attr.title]="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
            >
              @if (isDarkMode) {
                <!-- Sun icon -->
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2 M12 20v2 M4.93 4.93l1.42 1.42 M17.65 17.65l1.42 1.42 M2 12h2 M20 12h2 M4.93 19.07l1.42-1.42 M17.65 6.35l1.42-1.42"></path>
                </svg>
              } @else {
                <!-- Moon icon -->
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z"></path>
                </svg>
              }
            </button>

            <!-- Hamburger button -->
            <button
              class="menu-toggle"
              type="button"
              (click)="toggleMenu()"
              [attr.aria-expanded]="menuOpen"
              aria-label="Toggle navigation menu"
            >
              <span [class.open]="menuOpen"></span>
              <span [class.open]="menuOpen"></span>
              <span [class.open]="menuOpen"></span>
            </button>
          </div>

          <div class="links" [class.menu-open]="menuOpen">
            @for (link of links; track link.href) {
              <a
                [href]="link.href"
                [class.active]="activeSection === link.id"
                [attr.aria-current]="activeSection === link.id ? 'location' : null"
                (click)="closeMenu()"
              >
                {{ link.label }}
              </a>
            }
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
  menuOpen = false;
  isDarkMode = false;

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

    if (window.innerWidth > 720) {
      this.closeMenu();
    }
  }

  private updateActiveSection(): void {
    const activationPoint = 120;
    let currentSection = '';

    for (const link of this.links) {
      const section = document.getElementById(link.id);

      if (!section) continue;

      if (section.getBoundingClientRect().top <= activationPoint) {
        currentSection = link.id;
      }
    }

    const atPageBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 5;

    if (atPageBottom) {
      currentSection = 'contact';
    }

    this.activeSection = currentSection;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  constructor() {
    try {
      const saved = localStorage.getItem('theme');

      if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
        this.isDarkMode = saved === 'dark';
      } else {
        this.isDarkMode = matchMedia('(prefers-color-scheme: dark)').matches;
      }
    } catch {
      this.isDarkMode = false;
    }
  }

  toggleTheme(): void {
    const next = this.isDarkMode ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', next);
    this.isDarkMode = next === 'dark';

    try {
      localStorage.setItem('theme', next);
    } catch {
      /* ignore */
    }
  }
}
