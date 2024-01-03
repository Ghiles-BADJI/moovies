import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Moovie } from '../models/moovie.model';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCardModule,

    CommonModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() films! : Moovie[];

  
}
