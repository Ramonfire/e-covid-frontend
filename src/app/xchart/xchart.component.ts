import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-xchart',
  templateUrl: './xchart.component.html',
  styleUrls: ['./xchart.component.css']
})
export class XchartComponent implements OnInit {

  constructor(private Service: AuthService) { }
  public xchart: any=null;
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
   
    this.xchart = new Chart("MyXachart", {
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
