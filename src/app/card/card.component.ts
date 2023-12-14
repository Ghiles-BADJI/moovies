import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  items = [
    {
      poster: 'assets/img/projects/dz-dialect-app.png',
      name: 'DZ Dialect Admin',
      description: ['Angular 14', 'Material', 'PWA'],
      descriptionTxt: 'projects.description.dz-dialect-app',
      links: {online: 'https://dz-dialect.admin.bdsapp.fr/', github: 'https://github.com/Ghiles-BADJI/dz-dialect-sentence-api'}
    },

    {
      poster: 'assets/img/projects/slack2.png',
      name: 'Slack App',
      description: ['Angular 14', 'Material', 'PWA'],
      descriptionTxt: 'projects.description.slack',
      links: {online: 'https://slack.gh-it.fr', github: 'https://github.com/Ghiles-BADJI/Slack-app'}
    },

    {
      poster: 'assets/img/projects/facebook2.png',
      name: 'Facebook',
      description: ['Angular 14', 'Material', 'PWA'],
      descriptionTxt: 'projects.description.facebook',
      links: {online: 'https://facebook.gh-it.fr', github: 'https://github.com/Ghiles-BADJI/login'}
    }

  ]
}
