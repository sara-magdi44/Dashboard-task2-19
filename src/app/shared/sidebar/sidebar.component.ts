import { Component  , HostListener,ElementRef , Input} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() isActive = true;
   constructor( private elRef : ElementRef){}
   @HostListener('document:click', ['$event.target'])
    onClickOutside(target: HTMLElement) {
      const clickedInside = this.elRef.nativeElement.contains(target);
      if (!clickedInside) { 
        this.isActive = false;;
      }
    }
}
