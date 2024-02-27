import { Routes } from '@angular/router';
import { ContentWrapperComponent } from './components/layout/content-wrapper/content-wrapper.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { MyProfileComponent } from './components/users/my-profile/my-profile.component';

export const routes: Routes = [
  {
    path: '',
    component: ContentWrapperComponent,
  },
  {
    path: 'user',
    component: UserListComponent,
  },
  {
    path: 'my-profile',
    component: MyProfileComponent,
  },
];
