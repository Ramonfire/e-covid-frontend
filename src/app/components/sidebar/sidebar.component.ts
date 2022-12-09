import { Component, OnInit } from "@angular/core";
import { TokenStorageService } from "src/app/_services/token-storage.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  isAuthenticated: boolean=false;
  username: string | null = '';

  collapseShow = "hidden";
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isAuthenticated=!!this.tokenStorageService.getToken();
    const user=this.tokenStorageService.getUser();
      this.username=user.username;
  }
  toggleCollapseShow(classes: string) {
    this.collapseShow = classes;
  }
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
    }
}
