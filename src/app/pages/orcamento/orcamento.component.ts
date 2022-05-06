import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Orcamento } from 'src/app/classes/Orcamento';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.css']
})
export class OrcamentoComponent implements OnInit {
  public orcamento = new Orcamento();
  public formOrcamento: FormGroup;
  public mensagem: String = "";
  public mensagemErro: String = "";

  constructor(private formBuilder: FormBuilder, private store: AngularFirestore) { }

  ngOnInit(): void {
    if(localStorage.getItem("orcamentoTipo")) {
      this.orcamento.tipo = localStorage.getItem("orcamentoTipo")!;      
      localStorage.removeItem("orcamentoTipo")
    }
    else {
      this.orcamento.tipo = "Desenvolvimento de Sistemas Customizados";
    }

    this.formOrcamento = this.formBuilder.group(this.orcamento);
  }

  sendOrcamento() {
    this.limparErros();

    if(this.formOrcamento.valid) {
      console.log(this.formOrcamento.value);
      this.store.collection("orcamento").add(this.formOrcamento.value);
      this.mensagem = "Orçamento enviado com sucesso! Em breve um de nossos atendentes irá entrar em contato com você.";
      this.orcamento = new Orcamento();
      this.formOrcamento = this.formBuilder.group(this.orcamento);
    }
    else {
      this.mensagemErro = "Por favor, preencha todos os campos com asterisco (*)."
    }
  }

  limparErros() {
    this.mensagem = "";
    this.mensagemErro = "";
  }
}
