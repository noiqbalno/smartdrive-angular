import { Component } from '@angular/core';
import { DataProfileComponent } from '../profile/data-profile/data-profile.component';
import { DataAddressComponent } from '../address/data-address/data-address.component';
import { DataAccountNumberComponent } from '../account-number/data-account-number/data-account-number.component';
import { DataPasswordComponent } from '../password/data-password/data-password.component';
import { DataEmailComponent } from '../email/data-email/data-email.component';
import { DataPhoneComponent } from '../phone/data-phone/data-phone.component';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [
    DataProfileComponent,
    DataPasswordComponent,
    DataEmailComponent,
    DataPhoneComponent,
    DataAddressComponent,
    DataAccountNumberComponent,
  ],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css',
})
export class MyProfileComponent {}
