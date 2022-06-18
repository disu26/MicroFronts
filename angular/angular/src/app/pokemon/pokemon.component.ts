import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  name: string;
  namePokemon: string;
  urlImage: string;
  urlType: string;
  types: any[] = [];
  visibilidad=false;

  constructor(private PokemonService: PokemonService) {
    this.name = '';
    this.namePokemon = '';
    this.urlImage = '';
    this.urlType = '';
  }

  ngOnInit(): void {}

  search() {
    this.visibilidad =true;
    this.PokemonService.getPokemon(this.name).subscribe((data: any) => {
      this.urlImage = data.sprites.front_default;
      this.namePokemon = data.forms[0].name;
      console.log(this.namePokemon);
      this.urlType = data.forms[0].url;
      this.PokemonService.getType(this.urlType).subscribe((data: any) => {
        this.types = data.types;
      });
    });
  }
}
