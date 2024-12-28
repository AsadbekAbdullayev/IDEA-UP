import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { TabComponent } from '../../shared/components/tab/tab.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AccordionListComponent } from '../../shared/components/accordion-list/accordion-list.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-signin',
  imports: [
    NavbarComponent,
    TabComponent,
    FormsModule,
    MatButtonModule,
    AccordionListComponent,
    FooterComponent,
    NzIconModule,
    NzInputModule,
  ],
  templateUrl: './signin.component.html',
})
export default class SigninComponent {
  constructor(private message: NzMessageService) {}
  passwordVisible = false;
  email = '';
  password = '';
  login() {
    if (this.password.length > 0 && this.email.length > 0) {
      window.location.href = '/home';
    } else {
      this.message.error('Please enter email and password !');
    }
  }
}
