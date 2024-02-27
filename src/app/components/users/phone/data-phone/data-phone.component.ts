import { Component } from '@angular/core';
import { EditPhonePopupComponent } from '../edit-phone-popup/edit-phone-popup.component';

@Component({
  selector: 'app-data-phone',
  standalone: true,
  imports: [EditPhonePopupComponent],
  templateUrl: './data-phone.component.html',
  styleUrl: './data-phone.component.css',
})
export class DataPhoneComponent {}
