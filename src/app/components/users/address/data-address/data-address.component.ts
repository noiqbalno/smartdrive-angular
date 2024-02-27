import { Component } from '@angular/core';
import { EditAddressPopupComponent } from '../edit-address-popup/edit-address-popup.component';

@Component({
  selector: 'app-data-address',
  standalone: true,
  imports: [EditAddressPopupComponent],
  templateUrl: './data-address.component.html',
  styleUrl: './data-address.component.css',
})
export class DataAddressComponent {}
