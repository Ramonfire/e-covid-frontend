import { AuthService } from 'src/app/_services/auth.service';
import { Component, OnInit } from "@angular/core";
import { ContenuServiceTsService } from "src/app/contenu.service.ts.service";

@Component({
  selector: "app-header-stats",
  templateUrl: "./header-stats.component.html",
})
export class HeaderStatsComponent implements OnInit {
  
  data!:any[] ; //All Data from BackEnd
  comment!:any[];; //All Comments from BackEnd
  length! : number;
  commentPositive!:any[];
  dataModified!:any[]; //All Comments from BackEnd


  constructor(private service:AuthService) { 
 
  }

  ngOnInit(): void {

    this.service.getBackEndData().subscribe((response:any)=>{
      this.data = response;

    });

    this.service.getComments().subscribe((response:any)=>{
      this.comment = response;
    });

    this.service.getCommentsPositives().subscribe((response:any)=>{
      this.commentPositive = response;
    });


  }
 
  

}
