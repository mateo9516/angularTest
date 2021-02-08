import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    localStorage.setItem('heroes', JSON.stringify(this.heroes));
    localStorage.getItem('heroes');
    this.datos;
  }
  datos = [];
  title = 'testUI';
  heroSelected = {
    nombre:"iron man",
    descrip: "lore ipsum dolor sit amet, consectetur adipiscing elit. Sed sed fringilla nisi. Suspendisse vel nulla non ipsum volutpat fermentum et a velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    votosP: 88,
    votosN: 12,
    info: "",
    urlImg: "/assets/ironMan.jpg",
  };
  heroes=[
    {
    nombre:"Superman",
    descrip: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero",
    votosP: 64,
    votosN: 36,
    info: "",
    urlImg: "/assets/superMan.jpg",
  },
  {
    nombre:"Thor",
    descrip: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero",
    votosP: 15,
    votosN: 10,
    info: "",
    urlImg: "/assets/thor.jpg",

  },
  {
    nombre:"Batman",
    descrip: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero",
    votosP: 36,
    votosN: 64,
    info: "",
    urlImg: "/assets/batman.jpg",

  },
  {
    nombre:"Spiderman",
    descrip: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero",
    votosP: 64,
    votosN: 36,
    info: "",
    urlImg: "/assets/spiderman.jpg",
  },
];

setHeroSelected(hero: any){
 /* this.heroSelected = hero; */
}

}
