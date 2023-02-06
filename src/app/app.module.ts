import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostbyidComponent } from './components/postbyid/postbyid.component';
import { PostbyofficeComponent } from './components/postbyoffice/postbyoffice.component';
import { PostdetailsComponent } from './components/postdetails/postdetails.component';
import { PostsingleComponent } from './components/postsingle/postsingle.component';

import { PincodeService } from './services/pincode.service';

@NgModule({
  declarations: [
    AppComponent,
    PostbyidComponent,
    PostbyofficeComponent,
    PostdetailsComponent,
    PostsingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PincodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
