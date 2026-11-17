
import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { AWARDS, EDUCATION } from '../../data/portfolio.data';

declare const Swiper: new (
  element: Element,
  options: object
) => { destroy(deleteInstance?: boolean, cleanStyles?: boolean): void };

@Component({
  selector: 'app-education',
  standalone: true,
  styleUrl: 'education.component.css',
  template: `
    <section id="education">
      <div class="wrap education-wrap">
        <div class="education-heading">
          <span class="section-eyebrow">MY BACKGROUND</span>
          <h2>Education <span>&</span> Awards</h2>
          <p>My academic journey and achievements along the way.</p>
        </div>

        <!-- Education -->
        <div class="education-list">
          <h3 class="subsection-title">Education</h3>

          <div class="education-grid">
            @for (e of education; track e.title) {
              <article class="education-card">
                <div class="education-icon">
                  <img [src]="e.image" [alt]="e.image + ' logo'">
                </div>

                <div class="education-content">
                  <b>{{ e.title }}</b>
                  <span>{{ e.detail }}</span>
                </div>
              </article>
            }
          </div>
        </div>

        <!-- Awards -->
        <div class="awards-section">
          <h3 class="subsection-title">Awards & Recognition</h3>

          <div class="awards-grid">
            @for (a of awards; track a.title) {
              <article class="award-card">
                <div class="award-info">
                  <div>
                    <span class="award-label">RECOGNITION</span>
                    <h4>{{ a.title }}</h4>
                    <p>{{ a.detail }}</p>
                  </div>
                  <span class="award-mark">★</span>
                </div>

                @if (a.images.length > 0) {
                  <div class="swiper award-swiper">
                    <div class="swiper-wrapper">
                      @for (image of a.images; track image) {
                        <div class="swiper-slide">
                          <img [src]="image" [alt]="a.title + ' certificate'">
                        </div>
                      }
                    </div>

                    @if (a.images.length > 1) {
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-button-next"></div>
                    }
                  </div>
                }
              </article>
            }
          </div>
        </div>
      </div>
    </section>
  `
})
export class EducationComponent implements AfterViewInit, OnDestroy {
  readonly education = EDUCATION;
  readonly awards = AWARDS;

  private swipers: {
    destroy(deleteInstance?: boolean, cleanStyles?: boolean): void;
  }[] = [];

  ngAfterViewInit(): void {
    document.querySelectorAll('#education .award-swiper').forEach(element => {
      const hasMultipleSlides =
        element.querySelectorAll('.swiper-slide').length > 1;

      if (!hasMultipleSlides) return;

      this.swipers.push(new Swiper(element, {
        slidesPerView: 1,
        spaceBetween: 12,
        loop: false,
        navigation: {
          nextEl: element.querySelector('.swiper-button-next'),
          prevEl: element.querySelector('.swiper-button-prev')
        }
      }));
    });
  }

  ngOnDestroy(): void {
    this.swipers.forEach(swiper => swiper.destroy(true, true));
  }
}
