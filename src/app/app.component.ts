import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  adicionarArtigo(descricao: HTMLInputElement, url: HTMLInputElement): boolean {
    console.log(`Adicionando artigo descrição: ${descricao.value} e URL: ${url.value}`);
    return false;
  }
}
