import { AuthService } from './../../_services/auth.service';
import { Component, ElementRef, OnInit ,HostListener } from "@angular/core";
import { ContenuServiceTsService } from "src/app/contenu.service.ts.service";
import { single } from 'rxjs';

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  
  
})
export class LandingComponent implements OnInit {
  contenu: any[] = [];
  AnalysedComments: any;
  PostiveComment: any;

  topic: string[] = [];
  StatsdominantTopic:number=0;
  dominantTopic!:string;


















  Sentimental:string = 'Sentimental ';
  Topic: string = 'Topic ';
  closeResult = '';
  showModalVisitor = false;
  showModalAdmin = false;

  showModalData = false;


  toggleModalVisitor(){
    this.showModalVisitor = !this.showModalVisitor;
  }
  toggleModalAdmin (){
    this.showModalAdmin = !this.showModalAdmin;
  }
  toggleModalData (){
    this.showModalData = !this.showModalData;
  }
  
  constructor(private service : ContenuServiceTsService , private dataService:AuthService) {}


  ngOnInit(): void {
    this.service.getContenu().subscribe((response:any)=>{this.contenu = response});
    this.dataService.getComments().subscribe((response:any)=>{this.AnalysedComments = response});
    this.dataService.getCommentsPositives().subscribe((response:any)=>{this.PostiveComment = response});
    this.dataService.getCommentsBytopic().subscribe((response: any) => {
      this.topic = response;
      response.forEach((elem: string) =>{
        if(this.StatsdominantTopic < parseInt(elem.split(",")[0])){
        this.StatsdominantTopic = parseInt(elem.split(",")[0]);
        this.dominantTopic=elem.split(",")[1];
      };  
      });
      
      console.log("largest "+this.StatsdominantTopic + " "+this.dominantTopic);

     

    

    




    });

  }}




