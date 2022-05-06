import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPaginaComponent } from './pages/blog-pagina/blog-pagina.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { FaqComponent } from './pages/faq/faq.component';
import { HomeComponent } from './pages/home/home.component';
import { OrcamentoComponent } from './pages/orcamento/orcamento.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PesquisaComponent } from './pages/pesquisa/pesquisa.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PrecosComponent } from './pages/precos/precos.component';
import { ComercializacaoSistemaErpComponent } from './pages/servicos/comercializacao-sistema-erp/comercializacao-sistema-erp.component';
import { ComercializacaoSistemaPdvComponent } from './pages/servicos/comercializacao-sistema-pdv/comercializacao-sistema-pdv.component';
import { ConstrucaoDeSiteSistemaComponent } from './pages/servicos/construcao-de-site-sistema/construcao-de-site-sistema.component';
import { ConsultoriaEmpresarialComponent } from './pages/servicos/consultoria-empresarial/consultoria-empresarial.component';
import { ConsultoriaEstrategicaComponent } from './pages/servicos/consultoria-estrategica/consultoria-estrategica.component';
import { DesignGraficoRedesSociaisComponent } from './pages/servicos/design-grafico-redes-sociais/design-grafico-redes-sociais.component';
import { EmissaoCertificadoDigitalComponent } from './pages/servicos/emissao-certificado-digital/emissao-certificado-digital.component';
import { RevendaMaquinaDeCartaoComponent } from './pages/servicos/revenda-maquina-de-cartao/revenda-maquina-de-cartao.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { VendaEquipamentosDeInformaticaComponent } from './pages/servicos/venda-equipamentos-de-informatica/venda-equipamentos-de-informatica.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogPaginaComponent },
  { path: 'precos', component: PrecosComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'pesquisa', component: PesquisaComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'servicos/construcao-de-site-sistema', component: ConstrucaoDeSiteSistemaComponent },
  { path: 'servicos/consultoria-empresarial', component: ConsultoriaEmpresarialComponent },
  { path: 'servicos/consultoria-estrategica', component: ConsultoriaEstrategicaComponent },
  { path: 'servicos/comercializacao-sistema-pdv', component: ComercializacaoSistemaPdvComponent },
  { path: 'servicos/comercializacao-sistema-erp', component: ComercializacaoSistemaErpComponent },
  { path: 'servicos/emissao-certificado-digital', component: EmissaoCertificadoDigitalComponent },
  { path: 'servicos/venda-equipamentos-de-informatica', component: VendaEquipamentosDeInformaticaComponent },
  { path: 'servicos/revenda-maquina-de-cartao', component: RevendaMaquinaDeCartaoComponent },
  { path: 'servicos/design-grafico-redes-sociais', component: DesignGraficoRedesSociaisComponent },
  { path: 'orcamento', component: OrcamentoComponent },

  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
