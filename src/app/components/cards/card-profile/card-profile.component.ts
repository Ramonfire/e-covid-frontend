import { Component, OnInit } from "@angular/core";
import { TokenStorageService } from "src/app/_services/token-storage.service";

@Component({
  selector: "app-card-profile",
  templateUrl: "./card-profile.component.html",
})
export class CardProfileComponent implements OnInit {
  username: string | null = '';
   roles :string[]=[] ;

  constructor(private tokenStorageService : TokenStorageService) {}


  ngOnInit(): void {
    const user=this.tokenStorageService.getUser();
      this.roles=user.roles;
      this.username=user.username;
  }
}
