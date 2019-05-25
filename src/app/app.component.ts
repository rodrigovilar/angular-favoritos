import { Component } from '@angular/core';
import { Artigo } from './artigo/artigo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  artigos: Artigo[];

  constructor() {
    this.artigos = [
      new Artigo('Angular', 'angular.io', [1,4,5]),
      new Artigo('Google', 'google.comm', [3,2,2,1]),
      new Artigo('Twitter', 'twitter.com', [4,4,5])
    ];
  }

  adicionarArtigo(descricao: HTMLInputElement, url: HTMLInputElement): boolean {
    console.log(`Adicionando artigo descrição: ${descricao.value} e URL: ${url.value}`);
    return false;
  }
}
