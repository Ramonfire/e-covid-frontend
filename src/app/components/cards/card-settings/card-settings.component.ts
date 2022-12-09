import { Component, OnInit } from "@angular/core";
import { TokenStorageService } from "src/app/_services/token-storage.service";

@Component({
  selector: "app-card-settings",
  templateUrl: "./card-settings.component.html",
})
export class CardSettingsComponent implements OnInit  {
  username: string | null = '';
  roles :string[]=[] ;
  email: string | null = '';
  token: string | null = '';

  constructor(private tokenStorageService : TokenStorageService) {}

  ngOnInit(): void {
    const user=this.tokenStorageService.getUser();
      this.roles=user.roles;
      this.username=user.username;
      this.email=user.email;
      this.token=this.tokenStorageService.getToken();
  }
 
  
}
