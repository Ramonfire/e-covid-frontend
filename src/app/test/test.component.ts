import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  @Input() data! :string; // decorate the property with @Input()
  
  constructor() { }
  
	active = 1;

  ngOnInit(): void {
    console.log(this.data==="Sentimental ");
    
  }
  

}
