import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];
  id!:number;
  title:string='';
  body:string='';
  isHidden:boolean=true;
  constructor(private service:HttpService) { }

  ngOnInit(): void {
    this.GetRecord();
  }

  GetRecord(){
    this.service.getRecord()
    .subscribe((response:any)=>{
      console.log(response);
      this.posts=response;
    },(myerror)=>{
      alert("Something is went Wrong....")
    });
  }

  onSend(mytitle:any,mybody:any){
    let obj={
      title:mytitle,
      body:mybody
    }

    this.service.PostData(obj)
    .subscribe((response)=>{
      console.log(response);
    })

  }


  onEdit(item:any){
    console.log(item);
    this.id=item.id;
    this.title=item.title;
    this.body=item.body;
    this.isHidden=false;
  }

  onUpdate(){
    let obj={
      id:this.id,
      title:this.title,
      body:this.body
    }

    this.service.Updatedata(obj)
    .subscribe((response)=>{
      console.log(response);
    })

  }

  onDelete(id:any){
    this.service.DeleteData(id)
    .subscribe((response)=>{
      console.log(response);
    })
  }

}
