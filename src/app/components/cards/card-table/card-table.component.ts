import { UserService } from './../../../_services/user.service';
import { Component, OnInit, Input } from "@angular/core";
import { User } from 'src/app/User';

@Component({
  selector: "app-card-table",
  templateUrl: "./card-table.component.html",
})
export class CardTableComponent implements OnInit {
  users!: User[];
  userole!:string;
  user : User|undefined;

  public boolean = false
  public state = "";
  public msgerror = ""


  public printnamebinded = this.printname.bind(this);

  printname(msg:string):void{
    this.state=msg.split('.')[0];
    this.msgerror = msg.split('.')[1];

    setTimeout(() => {
      this.state="";
      this.msgerror = "";
    }, 2500);
  }


  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.service.getAllUser().subscribe((response:any)=>{
      this.users = response;
    });
    this.service.getAllUser().subscribe((response:any)=>{console.log(response)});
  }

  
}
