export class Blog {
  id: string;
  title: string = "";
  category: string = ""; 
  tags: string = "";
  text: string = "";
  image: string = "";
  date:any = new Date();
  views: number = 0;
  author: string = "";
}