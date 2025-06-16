import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet ,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashbaord';
    isBoxActive = true;
    emitSidebarFn() {
      this.isBoxActive = !this.isBoxActive;
    }
}
