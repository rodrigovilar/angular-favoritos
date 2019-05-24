import { Component, OnInit, HostBinding } from '@angular/core';
import { Artigo } from './artigo.model';

@Component({
  selector: 'app-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.css']
})
export class ArtigoComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  artigo: Artigo;
  
  constructor() {
    this.artigo = new Artigo('Google', 'http://google.com', [5, 4, 3]);
  }

  nota(n: number) {
    this.artigo.notas.push(n);
    return false;
  }
  
  ngOnInit() { }

}
