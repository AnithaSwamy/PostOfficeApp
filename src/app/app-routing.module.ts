import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostbyidComponent } from './components/postbyid/postbyid.component';
import { PostbyofficeComponent } from './components/postbyoffice/postbyoffice.component';
import { PostsingleComponent } from './components/postsingle/postsingle.component';

const routes: Routes = [
  { path: '', redirectTo: '/post/id', pathMatch: 'full' },
  { path: 'post/id', component: PostbyidComponent },
  { path: 'post/location', component: PostbyofficeComponent },
  { path: 'post/single', component: PostsingleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
