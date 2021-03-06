import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    UserComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
