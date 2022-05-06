import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contato } from 'src/app/classes/Contato';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  public contato = new Contato();
  public formContato: FormGroup = this.formBuilder.group(this.contato);
  public mensagem: String = "";
  public mensagemErro: String = "";

  constructor(private formBuilder: FormBuilder, private store: AngularFirestore) { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.limparErros();

    if(this.formContato.valid) {
      this.store.collection("contato").add(this.formContato.value);
      this.mensagem = "Mensagem enviada com sucesso!";
      this.contato = new Contato();
      this.formContato = this.formBuilder.group(this.contato);
    }
    else {
      this.mensagemErro = "Por favor, preencha todos os dados do formulário."
    }
  }

  limparErros() {
    this.mensagem = "";
    this.mensagemErro = "";
  }
}
