import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contato } from 'src/app/classes/Contato';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public contato = new Contato();
  public formContato: FormGroup;
  public mensagem: String = "";
  public mensagemErro: String = "";

  constructor(private formBuilder: FormBuilder, private store: AngularFirestore) { }

  ngOnInit(): void {
    this.contato.assunto = "Desenvolvimento de Sistemas Customizados";
    this.formContato = this.formBuilder.group(this.contato);
  }

  sendMessage() {
    this.limparErros();
    console.log(this.formContato.value);
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
