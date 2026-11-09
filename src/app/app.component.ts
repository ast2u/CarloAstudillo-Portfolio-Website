import { AfterViewInit, Component, HostListener, OnDestroy } from '@angular/core';

interface ConfettiOptions {
  particleCount?: number;
  spread?: number;
  startVelocity?: number;
  scalar?: number;
  ticks?: number;
}

interface SwiperInstance {
  destroy(deleteInstance?: boolean, cleanStyles?: boolean): void;
}

declare const AOS: {
  init(options: { duration: number; once: boolean }): void;
};

declare const Swiper: new (element: Element, options: object) => SwiperInstance;

declare const Typed: new (
  selector: string,
  options: {
    strings: string[];
    typeSpeed: number;
    backSpeed: number;
    loop: boolean;
  }
) => { destroy(): void };

declare const confetti: {
  (options: ConfettiOptions): void;
  create(canvas: HTMLCanvasElement): (options: ConfettiOptions) => Promise<void>;
};

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit, OnDestroy {
  readonly currentYear = new Date().getFullYear();

  private readonly observers: IntersectionObserver[] = [];
  private readonly timeouts: ReturnType<typeof setTimeout>[] = [];
  private readonly swipers: SwiperInstance[] = [];
  private typedInstance?: { destroy(): void };

  ngAfterViewInit(): void {
    this.initializeAnimations();
    this.initializeSliders();
    this.initializeTyping();
    this.initializeTimelineObservers();
    this.initializeAwardConfetti();
    this.updateScrollEffects();
  }

  ngOnDestroy(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.timeouts.forEach(timeout => clearTimeout(timeout));
    this.swipers.forEach(swiper => swiper.destroy(true, true));
    this.typedInstance?.destroy();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateScrollEffects();
  }

  async celebrateDownload(): Promise<void> {
    const wrapper = document.querySelector<HTMLElement>('.button-wrapper');
    if (!wrapper) {
      console.error('Unable to find the CV download button wrapper.');
      return;
    }

    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 600;
    wrapper.appendChild(canvas);

    try {
      await confetti.create(canvas)({
        particleCount: 300,
        spread: 500,
        startVelocity: 20,
        scalar: 0.8,
        ticks: 50
      });
    } finally {
      canvas.remove();
    }
  }

  private initializeAnimations(): void {
    AOS.init({ duration: 1000, once: true });
  }

  private initializeSliders(): void {
    document.querySelectorAll('.swiper').forEach(element => {
      this.swipers.push(new Swiper(element, {
        navigation: {
          nextEl: element.querySelector('.swiper-button-next'),
          prevEl: element.querySelector('.swiper-button-prev')
        }
      }));
    });
  }

  private initializeTyping(): void {
    this.typedInstance = new Typed('.auto-type', {
      strings: ['Software Engineer', 'Full-Stack Engineer', 'Cloud Computing'],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true
    });
  }

  private initializeTimelineObservers(): void {
    this.observeTimeline('.timeline-container', 900);
    this.observeTimeline('.timeline-container2', 1800);
  }

  private observeTimeline(selector: string, delay: number): void {
    const containers = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (!containers.length) {
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        }

        const index = containers.indexOf(entry.target as HTMLElement);
        this.timeouts.push(setTimeout(() => {
          entry.target.classList.add('show');
        }, index * delay));
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1 });

    containers.forEach(container => observer.observe(container));
    this.observers.push(observer);
  }

  private initializeAwardConfetti(): void {
    const target = document.getElementById('confetti-trigger');
    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          confetti({ particleCount: 450, spread: 300 });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(target);
    this.observers.push(observer);
  }

  private updateScrollEffects(): void {
    const header = document.querySelector<HTMLElement>('header');
    if (header && window.innerWidth > 602) {
      header.classList.toggle('sticky', window.scrollY > 0);
    }

    this.activateTimeline(document.querySelector('.timeline'), 1.3);
    this.activateTimeline(document.querySelector('.timeline2'), 1.4);

    const activeSection = Array.from(document.querySelectorAll<HTMLElement>('section'))
      .find(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        return top >= offset && top < offset + section.offsetHeight;
      });

    if (activeSection?.id) {
      document.querySelectorAll('header nav a.nav-link-edit').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${activeSection.id}`);
      });
    }
  }

  private activateTimeline(timeline: Element | null, screenRatio: number): void {
    if (timeline && timeline.getBoundingClientRect().top < window.innerHeight / screenRatio) {
      timeline.classList.add('active');
    }
  }
}
