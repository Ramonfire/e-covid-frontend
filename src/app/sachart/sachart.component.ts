import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AuthService } from '../_services/auth.service';
@Component({
  selector: 'app-sachart',
  templateUrl: './sachart.component.html',
  styleUrls: ['./sachart.component.css']
})
export class SachartComponent implements OnInit {

  constructor(private Service: AuthService) { }
  public sachart: any=null;
  date: string[] = [];
  comments: string[] = [];

  ngOnInit(): void {
    this.Service.getCommentsByDate().subscribe((response: any) => {
      response.forEach((element: string) => {
        this.comments.push(element.split(",")[0]);
        this.date.push(element.split(",")[1].split(" ")[0]);
      });
      
      this.createSachart(this.date,this.comments);
      

      

    });

  
  }
  
  createSachart(date:string[],comments:string[]) {
    if(this.sachart!=null){
      this.sachart.destroy(); 
    }
    this.sachart = new Chart("MySachart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: date,
        datasets: [
          {
            label: "comments",
            data: comments,
            backgroundColor: 'blue'
          },
          
        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });

  }
}
