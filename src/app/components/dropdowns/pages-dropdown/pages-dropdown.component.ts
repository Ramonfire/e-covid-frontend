import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { createPopper } from "@popperjs/core";
import { TokenStorageService } from "src/app/_services/token-storage.service";

@Component({
  selector: "app-pages-dropdown",
  templateUrl: "./pages-dropdown.component.html",
})
export class PagesDropdownComponent implements OnInit {

  
  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef!: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  popoverDropdownRef!: ElementRef;


isAuthenticated: boolean=false;
private roles :string[]=[] ;
username: string | null = '';

constructor(private tokenStorageService: TokenStorageService) { }


  ngOnInit() {
    this.isAuthenticated=!!this.tokenStorageService.getToken();
    if(this.isAuthenticated){
      const user=this.tokenStorageService.getUser();
      this.roles=user.roles;
      this.username=user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
    }



  toggleDropdown(event?:any) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
      this.createPoppper();
    }
  }
  createPoppper() {
    createPopper(
      this.btnDropdownRef?.nativeElement,
      this.popoverDropdownRef?.nativeElement,
      {
        placement: "bottom-start",
      }
    );
  }
}
