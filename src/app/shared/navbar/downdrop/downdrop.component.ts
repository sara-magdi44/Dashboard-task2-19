import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-downdrop',
  imports: [CommonModule],
  templateUrl: './downdrop.component.html',
  styleUrl: './downdrop.component.scss'
})
export class DowndropComponent {
 @Input() isOpen: boolean = false;

  messages: any[] = [
    { userImage: '/assets/images/png/image1.png', userName: 'Sally Castro', message: 'How many free autoresponders have', status: 'new' },
    { userImage: '/assets/images/png/image2.png', userName: 'Ada Mendez', message: 'Another title for this article can be', status: 'new' },
    { userImage: '/assets/images/png/image3.png', userName: 'Jeremiah Mann', message: 'What makes one logo better than', status: 'read' },
    { userImage: '/assets/images/png/image4.png', userName: 'Hulda Warner', message: 'Adwords Keyword research', status: 'read' },
    { userImage: '/assets/images/png/image5.png', userName: 'Barry Armstrong', message: 'I have been questioned many people how to make this call call me when you are on ', status: 'read' },


  ];

 
  markAllAsRead() {
    this.messages.forEach(n => {
      if (n.status === 'new') {
        n.status = 'read';
      }
    });
  }

  markAsRead(messages: any) {
    if (messages.status === 'new') {
      messages.status = 'read';
    }
  }
}
