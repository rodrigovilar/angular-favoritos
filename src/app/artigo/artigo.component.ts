import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.css']
})
export class ArtigoComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  
  notas: number[];
  media: number;
  descricao: string;
  url: string;

  constructor() {
    this.descricao = 'Google';
    this.url = 'http://google.com';
    this.notas = [5, 4, 3];
    this.media = this.calcularMedia(this.notas);
  }

  nota(n: number) {
    this.notas.push(n);
    this.media = this.calcularMedia(this.notas);
    return false;
  }
  ngOnInit() { }

  calcularMedia(arr: number[]): number {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
      soma += arr[i];
    }
    return Math.round(100 * (soma / arr.length ) ) / 100;
  }

}
