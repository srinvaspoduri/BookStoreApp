import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {Routes,RouterModule} from "@angular/router";
import { AdduserComponent } from './admin/users/adduser/adduser.component';
import { ViewuserComponent } from './admin/users/viewuser/viewuser.component'
import {FormsModule} from '@angular/forms';
import { BooksComponent } from './admin/books/books.component';
import { AddbookComponent } from './admin/books/addbook/addbook.component';
import { UsersComponent } from './admin/users/users.component';
import { ViewbookComponent } from './admin/books/viewbook/viewbook.component';

const routes: Routes = [
  { path: 'admin/users', component: UsersComponent},
  {path:'admin/books',component:BooksComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    AdduserComponent,
    ViewuserComponent,
    BooksComponent,
    AddbookComponent,
    ViewbookComponent,
    
  ],
  imports: [
    BrowserModule,FormsModule,BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
