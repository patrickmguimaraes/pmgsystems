import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/classes/Blog';

@Component({
  selector: 'app-blog-pagina',
  templateUrl: './blog-pagina.component.html',
  styleUrls: ['./blog-pagina.component.css']
})
export class BlogPaginaComponent implements OnInit {
  public nome: string = "Título do Blog";
  public blog: Blog;
  public blogCategory: Blog[] = [];

  constructor(private store: AngularFirestore, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(paramsId => {
        this.store.collection<Blog>("blog").doc(paramsId.id).ref.get().then((blog) => {
          this.blog = blog.data()!;
          this.blog.id = paramsId.id;
          this.nome = this.blog.title;
          this.blog.views = (this.blog.views==undefined ? 0 : this.blog.views) +1;

          this.store.doc("blog/"+paramsId.id).update({views: this.blog.views});

          this.store.collection<Blog>('blog', ref => ref.where('category', '==', this.blog.category))
            .valueChanges({idField: "id"}).subscribe(blogCategory => {
              blogCategory.sort((a, b) => a.views - b.views);
              this.blogCategory = [];

              blogCategory.forEach(bc => {
                if(bc.id!=paramsId.id && this.blogCategory.length<3) {
                  this.blogCategory.push(bc);
                }
              });
            });
        });
    });
  }
}
