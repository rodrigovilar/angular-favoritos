import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Artigo } from './artigo.model';

@Component({
  selector: 'app-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.css']
})
export class ArtigoComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() artigo: Artigo;
  
  constructor() { }

  nota(n: number) {
    this.artigo.notas.push(n);
    return false;
  }
  
  ngOnInit() { }

}
