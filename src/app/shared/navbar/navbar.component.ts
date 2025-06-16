import { Component, EventEmitter, Output ,HostListener,ElementRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { DowndropComponent } from './downdrop/downdrop.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-navbar',
  imports: [
    NgbModule,
    CommonModule,
    SearchComponent,
    DowndropComponent

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
 @Output() triggerAction = new EventEmitter<void>();

  messagesOpen: boolean = false;
  notificationsOpen: boolean = false;

  toggleMessages() {
    this.messagesOpen = !this.messagesOpen;
    this.notificationsOpen = false;
  }

  toggleNotifications() {
    this.notificationsOpen = !this.notificationsOpen;
    this.messagesOpen = false; 
  }

  openSidebar() {
    this.triggerAction.emit();
  }
   constructor( private elRef : ElementRef){}
  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: HTMLElement) {
    const clickedInside = this.elRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.messagesOpen = false;
      this.notificationsOpen = false;
    }
  }

}
