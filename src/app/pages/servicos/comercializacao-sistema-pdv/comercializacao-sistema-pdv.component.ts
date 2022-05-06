import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-comercializacao-sistema-pdv',
  templateUrl: './comercializacao-sistema-pdv.component.html',
  styleUrls: ['./comercializacao-sistema-pdv.component.css']
})
export class ComercializacaoSistemaPdvComponent implements OnInit {
  public safeURL: SafeResourceUrl;

  constructor(private _sanitizer: DomSanitizer){
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/Ask40psk-wM");
  }

  ngOnInit(): void {
  }

}
