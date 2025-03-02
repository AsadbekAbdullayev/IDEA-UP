import { Component } from '@angular/core';
import { FormControl } from '@angular/forms'; // Import FormControl from Angular forms
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-reusable-input',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  template: `
    <mat-form-field appearance="outline" class="full-width">
      <mat-label>{{ label }}</mat-label>
      <input
        matInput
        [type]="type"
        [placeholder]="placeholder"
        [formControl]="control"
        [required]="required"
        [readonly]="readonly"
      />
      <ng-container *ngIf="suffixIcon">
        <mat-icon matSuffix>{{ suffixIcon }}</mat-icon>
      </ng-container>
      <mat-error *ngIf="control?.hasError('required')">
        {{ errorMessage || 'This field is required' }}
      </mat-error>
    </mat-form-field>
  `,
})
export class ReusableInputComponent {
  label: string = 'Enter something';
  type: string = 'text';
  placeholder: string = 'Type here';
  required: boolean = false;
  readonly: boolean = false;
  suffixIcon: string = 'info';
  // Use FormControl instead of WritableSignal
  control = new FormControl(null); // Initialize FormControl with an initial value (null or any other default)
  errorMessage: string = 'Required';
}
