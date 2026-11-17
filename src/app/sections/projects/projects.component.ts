
import { Component } from '@angular/core';
import { PROJECTS } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  styleUrl: 'projects.component.css',
  template: `
    <section id="projects">
      <div class="wrap">
        <h2>Projects</h2>

        <div class="cards">
          @for (project of projects; track project.title) {
            <article class="card project-card">
              <img
                [src]="project.image"
                [alt]="project.title + ' screenshot'"
                loading="lazy"
              >

              <div class="body">
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>

                <div class="tags">
                  @for (tag of project.tags; track tag) {
                    <span class="tag">{{ tag }}</span>
                  }
                </div>
              </div>

              @if (project.link) {
                <a
                  class="project-card-link"
                  [href]="project.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  [attr.aria-label]="'View ' + project.title + ' on GitHub'"
                ></a>
              }
            </article>
          }
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  readonly projects = PROJECTS;
}
