import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';










@Component({
  selector: 'app-generic-input',
  templateUrl: './input.component.html',
  imports: [NzInputModule, NzIconModule],
})
export class GenericInputComponent {}
