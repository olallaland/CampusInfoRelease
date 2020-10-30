import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { OngoingListComponent } from './component/activity/ongoing-list/ongoing-list.component';
import {RouterModule} from '@angular/router';
import { ProfileComponent } from './component/profile/profile.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import {MatTabsModule} from '@angular/material/tabs';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    OngoingListComponent,
    ProfileComponent,
    HomepageComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: '', component: HomepageComponent},
      {path: 'activity/ongoing-list', component: OngoingListComponent},
      {path: 'user/profile', component: ProfileComponent}
    ]),
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
