import {NgModule} from '@angular/core';
import {ProfileViewComponent} from './containers/profile-view.component';
import {RouterModule} from '@angular/router';
import {PROFILE_ROUTES} from './profile.routes';
import {ProfileEditComponent} from './containers/profile-edit.component';

@NgModule({
  declarations: [
    ProfileViewComponent,
    ProfileEditComponent
  ],
  imports: [
    RouterModule.forChild(PROFILE_ROUTES)
  ],
  providers: []
})
export class ProfileModule {
}
