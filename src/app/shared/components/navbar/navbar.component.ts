import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common'; // Import CommonModule for basic directives like ngIf, ngFor
import { FormsModule } from '@angular/forms'; // If using ngModel
import { MatIconModule } from '@angular/material/icon';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  imports: [
    MatButtonModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    NzIconModule,
    NzInputModule,
  ],
})
export class NavbarComponent {
  userName: string = '';
}
