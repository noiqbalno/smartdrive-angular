import { Component } from '@angular/core';
import { EditAccountNumberPopupComponent } from '../edit-account-number-popup/edit-account-number-popup.component';

@Component({
  selector: 'app-data-account-number',
  standalone: true,
  imports: [EditAccountNumberPopupComponent],
  templateUrl: './data-account-number.component.html',
  styleUrl: './data-account-number.component.css',
})
export class DataAccountNumberComponent {}
