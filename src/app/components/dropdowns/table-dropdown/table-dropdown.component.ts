import { User } from 'src/app/User';
import { Component, AfterViewInit, ViewChild, ElementRef, Input } from "@angular/core";
import { createPopper } from "@popperjs/core";
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: "app-table-dropdown",
  templateUrl: "./table-dropdown.component.html",
})
export class TableDropdownComponent implements AfterViewInit {
  
  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef!: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  popoverDropdownRef!: ElementRef;
  
  @Input() user!: User;
  @Input()
  callbackmethode!: (param:string) => void;

  isSuccessful = false;
  isDeleteFailed = false;
  errorMessage = '';

  constructor(private service: UserService) {}

  delete():void{
    this.service.deleteuser(this.user?.username).subscribe({
      next: data => {
        console.log(data.message);
        this.isSuccessful = true;
        this.isDeleteFailed = false;
         setTimeout(function(){  window.location.reload() ; }, 1000);
        this.callbackmethode(this.isDeleteFailed ? 'fail.' + this.errorMessage : 'success.' + this.errorMessage);

      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isDeleteFailed = true;
        //alert(this.errorMessage);
        this.callbackmethode(this.isDeleteFailed ? 'fail.' + this.errorMessage : 'success.' + this.errorMessage);

      }
    });

 
  }

  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: "bottom-start",
      }
    );
  }
  toggleDropdown(event:any) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }
}
