import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent,
    SearchComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
