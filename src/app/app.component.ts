import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from './components/headers/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, FooterComponent],  //не забывай добавлять импорты
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  protected title = 'BeautySalon';
}
