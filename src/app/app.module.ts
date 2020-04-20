import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserHeaderComponent } from './user-view/user-header/user-header.component';
import { UserFooterComponent } from './user-view/user-footer/user-footer.component';
import { UserHomeComponent } from './user-view/user-home/user-home.component';
import { UserAboutComponent } from './user-view/user-about/user-about.component';
import { UserContactComponent } from './user-view/user-contact/user-contact.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminHeaderComponent } from './admin-view/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-view/admin-footer/admin-footer.component';
import { AdminManagerComponent } from './admin-view/admin-manager/admin-manager.component';
import { AdminUpdateComponent } from './admin-view/admin-update/admin-update.component';
import { AdminAddComponent } from './admin-view/admin-add/admin-add.component';

const appRoutes: Routes = [
  // user routers
  {
    path: '',
    component: UserViewComponent,
    children: [
      { path: '', component: UserHomeComponent, pathMatch: 'full'},
      { path: 'about', component: UserAboutComponent},
      { path: 'contact', component: UserContactComponent},
    ]
  },
  // admin routers
  {
    path: '',
    component: AdminViewComponent,
    children: [
      { path: 'manager', component: AdminManagerComponent },
      { path : 'update/:id', component : AdminUpdateComponent, pathMatch: 'full'},
      { path: 'add', component: AdminAddComponent },
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UserViewComponent,
    UserHeaderComponent,
    UserFooterComponent,
    UserHomeComponent,
    UserAboutComponent,
    UserContactComponent,
    AdminViewComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminManagerComponent,
    AdminUpdateComponent,
    AdminAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
