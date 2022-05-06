import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Blog } from 'src/app/classes/Blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public blog: Blog[] = [];
  public blogBackUp: Blog[] = [];
  public currentItemsToShow: Blog[] = [];
  public buscando:boolean = false;
  public proximoAtivo:boolean = false;
  public anteriorAtivo: boolean = false;
  public listaPaginator: number[] = [];
  public listaPaginatorItens: number = 0;
  public pageItemActive: number = 0;
  public categories: Map<string, number> = new Map();
  public tags: string[] = [];
  public mainBlog: Blog[] = [];

  constructor(private store: AngularFirestore) { }

  ngOnInit(): void {
    this.store.collection<Blog>("blog").valueChanges({idField: "id"}).subscribe(blog => {
      this.blog = blog;

      this.blog.forEach((b)=>{
        b.text = b.text.length>200 ? b.text.substring(0, 200) + "..." : b.text;

        if(!this.categories.has(b.category)) {
          this.categories.set(b.category, 0);
        }
        this.categories.set(b.category, this.categories.get(b.category)!+1);

        b.tags.split(",").forEach((value) => {
          if(!this.tags.includes(value)) {
            this.tags.push(value);
          }
        });

        this.mainBlog.push(b);
        this.blogBackUp.push(b);
      });

      this.mainBlog.sort((a, b) => b.views - a.views);
      if(this.mainBlog.length>5) {
        this.mainBlog.splice(5, this.mainBlog.length);
      }

      this.configPaginator();
    });
  }

  configPaginator() {
    this.listaPaginator = [];
    this.listaPaginatorItens = this.blog.length / 10;
    var totalPage: number = 0;

    if(this.blog.length%11==0) { //Add um item a mais quando for multiplo de 11
      this.listaPaginatorItens = this.listaPaginatorItens + 1;
    }

    if(this.listaPaginatorItens >= 3) {
      this.proximoAtivo = true;
      totalPage = 3;
    }
    else {
      totalPage = this.listaPaginatorItens;
    }
    
    for (let index = 0; index < totalPage; index++) {
      this.listaPaginator.push(index + 1);
    }

    if(this.listaPaginator.length>0) {
      this.onPageChange(1);
    }

    this.buscando = false;
  }

  onPageChange(numero: number) {
    this.currentItemsToShow = this.blog;
    this.pageItemActive = numero;
  }

  proximo() {
    var min:number = this.listaPaginator[2] + 1;
    var max:number = this.listaPaginator[2] + 3;

    if(max > this.listaPaginatorItens) {
      max = this.listaPaginatorItens;
      this.proximoAtivo = false;
    }

    this.listaPaginator = [];
    for (let index = min; index <= max; index++) {
      this.listaPaginator.push(index);
    }

    this.onPageChange(min);
    this.anteriorAtivo = true;
  }

  anterior() {
    var min:number = this.listaPaginator[0] - 3;
    var max:number = this.listaPaginator[0] - 1;

    if(min==1) {
      this.anteriorAtivo = false;
    }

    this.listaPaginator = [];
    for (let index = min; index <= max; index++) {
      this.listaPaginator.push(index);
    }

    this.onPageChange(max);
    this.proximoAtivo = true;
  }

  public trackItem (index: number, item: Blog) {
    return item.id;
  }

  filterCategoria(categoria: string) {
    this.blog = [];

    this.blogBackUp.forEach((b) => {
      if(b.category==categoria) {
        this.blog.push(b);
      }
    });

    this.configPaginator();
  }

  filterTags(tag: string) {
    this.blog = [];

    this.blogBackUp.forEach((b) => {
      if(b.tags.split(",").includes(tag)) {
        this.blog.push(b);
      }
    });

    this.configPaginator();
  }
}
