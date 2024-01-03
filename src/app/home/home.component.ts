import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { Moovie } from './models/moovie.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent,
    SearchComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  moovies : Moovie[] =  [
    {
      img: "https://i2.wp.com/moviefail.com/wp-content/uploads/2014/11/interstellar1.jpeg?fit=1920%2C1080&ssl=1",
      title: "Interstellar" 
    },

    {
      img:"https://addict-culture.com/wp-content/uploads/2018/05/PulpFiction_quad_UK-1-e1526824603757.jpg",
        title: "Pulp fiction"
    },
    
    {
      img: "https://i2.wp.com/www.vitav.fr/wp-content/uploads/2021/10/premi%C3%A8re-image-shutter-island.jpg?fit=711%2C400&ssl=1",
      title: "Shutter Island" 
    },

    {
      img: "https://m.media-amazon.com/images/S/pv-target-images/169be8ab42af0b61f874fcd564e89d5916887d1a2034de95e86992b62f1b80b9.jpg",
      title: "Les évadés" 
    },

    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVpNv5v1Did1jgjyDX2nqcq57Hvxpa6I6wHg&usqp=CAU",
      title: "La ligne verte"
    }
  ];

  mooviesfilter = this.moovies;


  FilterMoovies(searchValue: string) {

    this.mooviesfilter = this.moovies.filter(elem => elem.title.toLowerCase().includes(searchValue.toLowerCase()))
  }
}
