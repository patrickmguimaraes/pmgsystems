import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { PrecosComponent } from './pages/precos/precos.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogPaginaComponent } from './pages/blog-pagina/blog-pagina.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { PesquisaComponent } from './pages/pesquisa/pesquisa.component';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { environment } from 'src/environments/environment.prod';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { FaqComponent } from './pages/faq/faq.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { OrcamentoComponent } from './pages/orcamento/orcamento.component';
import { ConstrucaoDeSiteSistemaComponent } from './pages/servicos/construcao-de-site-sistema/construcao-de-site-sistema.component';
import { ConsultoriaEmpresarialComponent } from './pages/servicos/consultoria-empresarial/consultoria-empresarial.component';
import { ComercializacaoSistemaErpComponent } from './pages/servicos/comercializacao-sistema-erp/comercializacao-sistema-erp.component';
import { EmissaoCertificadoDigitalComponent } from './pages/servicos/emissao-certificado-digital/emissao-certificado-digital.component';
import { VendaEquipamentosDeInformaticaComponent } from './pages/servicos/venda-equipamentos-de-informatica/venda-equipamentos-de-informatica.component';
import { RevendaMaquinaDeCartaoComponent } from './pages/servicos/revenda-maquina-de-cartao/revenda-maquina-de-cartao.component';
import { DesignGraficoRedesSociaisComponent } from './pages/servicos/design-grafico-redes-sociais/design-grafico-redes-sociais.component';
import { ConsultoriaEstrategicaComponent } from './pages/servicos/consultoria-estrategica/consultoria-estrategica.component';
import { ComercializacaoSistemaPdvComponent } from './pages/servicos/comercializacao-sistema-pdv/comercializacao-sistema-pdv.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    SobreNosComponent,
    PrecosComponent,
    PageNotFoundComponent,
    ComingSoonComponent,
    BlogComponent,
    BlogPaginaComponent,
    ContatoComponent,
    PesquisaComponent,
    FaqComponent,
    ServicosComponent,
    OrcamentoComponent,
    ConstrucaoDeSiteSistemaComponent,
    ConsultoriaEmpresarialComponent,
    ConsultoriaEstrategicaComponent,
    ComercializacaoSistemaPdvComponent,
    ComercializacaoSistemaErpComponent,
    EmissaoCertificadoDigitalComponent,
    VendaEquipamentosDeInformaticaComponent,
    RevendaMaquinaDeCartaoComponent,
    DesignGraficoRedesSociaisComponent
  ],
  imports: [
    NgxLoadingModule.forRoot({
        //animationType: ngxLoadingAnimationTypes.none
    }),
    BrowserModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
