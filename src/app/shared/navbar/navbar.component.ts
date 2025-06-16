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


  openSidebar() {
    this.triggerAction.emit();
  }


}
