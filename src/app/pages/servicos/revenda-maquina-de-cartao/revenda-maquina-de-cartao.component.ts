import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-revenda-maquina-de-cartao',
  templateUrl: './revenda-maquina-de-cartao.component.html',
  styleUrls: ['./revenda-maquina-de-cartao.component.css']
})
export class RevendaMaquinaDeCartaoComponent implements OnInit {
  public safeURL: SafeResourceUrl;

  constructor(private _sanitizer: DomSanitizer){
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/oFhY6pONiYg");
  }

  ngOnInit(): void {
  }

}
