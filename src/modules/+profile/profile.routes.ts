import {Routes} from '@angular/router';
import {ProfileViewComponent} from './containers/profile-view.component';
import {ProfileEditComponent} from './containers/profile-edit.component';

export const PROFILE_ROUTES: Routes = [
  {path: '', component: ProfileViewComponent},
  {path: 'edit', component: ProfileEditComponent}
];
