import { AuthService } from './../../../_services/auth.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  constructor(private service : AuthService) {}
  data: any[] = [];
  allComments!: number;

  ngOnInit() {
    this.service.getCommentsByEmotion().subscribe((response:any)=>{
      this.data = response;
      console.log(response);
    });
    this.service.getComments().subscribe((response:any)=>{
      this.allComments = response.length;
      console.log(response);
    }
    );
  }
}
