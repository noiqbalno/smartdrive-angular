import { Component } from '@angular/core';
import { EditPasswordPopupComponent } from '../edit-password-popup/edit-password-popup.component';

@Component({
  selector: 'app-data-password',
  standalone: true,
  imports: [EditPasswordPopupComponent],
  templateUrl: './data-password.component.html',
  styleUrl: './data-password.component.css',
})
export class DataPasswordComponent {}
