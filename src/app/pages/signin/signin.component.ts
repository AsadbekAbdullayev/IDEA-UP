import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';









@Component({
  selector: 'app-signin',
  imports: [FormsModule, MatButtonModule, NzIconModule, NzInputModule],
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
