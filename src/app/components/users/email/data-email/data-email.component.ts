import { Component } from '@angular/core';
import { EditEmailPopupComponent } from '../edit-email-popup/edit-email-popup.component';

@Component({
  selector: 'app-data-email',
  standalone: true,
  imports: [EditEmailPopupComponent],
  templateUrl: './data-email.component.html',
  styleUrl: './data-email.component.css',
})
export class DataEmailComponent {}
