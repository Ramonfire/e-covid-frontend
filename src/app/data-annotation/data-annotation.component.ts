import { AuthService } from './../_services/auth.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-data-annotation',
  templateUrl: './data-annotation.component.html',
  styleUrls: ['./data-annotation.component.css']
})
export class DataAnnotationComponent implements OnInit {
  
  illegibletoSubmit: boolean = false;
  ul:any[] = [];
  ul2:any[] = [];


  selectType($event : Event  /* cocher ou decocher */){
    const isChecked = ($event.target as HTMLInputElement).checked;
    isChecked ? this.ul.push(1) :  this.ul.pop();  
    
    
  }

  selectType2($event : Event  /* cocher ou decocher */){
    const isChecked = ($event.target as HTMLInputElement).checked;
    isChecked ? this.ul2.push(1) :  this.ul.pop();  
    
  }

  isTypesValid() : boolean{
    let length = this.ul?.length;
  
    if (length >= 1) {   // en moins un type
      return true;
      console.log("false");
    }
    return false;
 }

 isTypesValid2() : boolean{
  let length = this.ul2?.length;

  if (length >= 1) {   // en moins un type
    return true;
    console.log("false");
  }
  return false;
}

form: any = {
  username: null,
  password: null
};



 @ViewChild('myDiv')
  myDiv!: ElementRef<HTMLElement>;

  
 @ViewChild('myUl')
  myUl!: ElementRef<HTMLElement>;


 reset(){
  let ul: HTMLElement = this.myDiv.nativeElement;
  ul.querySelectorAll('input').forEach((input: HTMLInputElement) => {
    input.checked = false;
    input.disabled = false;
  });
  let ul_2: HTMLElement = this.myUl.nativeElement;
  ul_2.querySelectorAll('input').forEach((input2: HTMLInputElement) => {
    input2.checked = false;
    input2.disabled = false;
  });
    this.ul=[];
    this.ul2=[];

 }



  list!: any[] ;
  i =1;

  constructor( private service: AuthService ) { }

  ngOnInit(): void {

    
    this.service.getComments().subscribe((response:any)=>{
      this.list = response;
      this.comment=this.list[0];
      this.show();
      
      
    });
    
  }


  comment:string = " ";
   
  show(){
    const { items, items2 } = this.form;
    this.reset();
    if(this.i < this.list.length){
    this.comment=this.list[this.i];
    this.i++;
    console.log(this.comment);
    }
    else{
      this.comment = " not comment Left ";
    }

  }

  

}
