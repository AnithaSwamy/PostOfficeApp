import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostbyidComponent } from './components/postbyid/postbyid.component';
import { PostbyofficeComponent } from './components/postbyoffice/postbyoffice.component';
import { PostsingleComponent } from './components/postsingle/postsingle.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NetworkerrorComponent } from './components/networkerror/networkerror.component';

import { AuthGuard } from './auth/auth.guard'

const routes: Routes = [
  { path: '', redirectTo: '/post/id', pathMatch: 'full' },
  { path: 'post/id', component: PostbyidComponent },
  { path: 'post/location', component: PostbyofficeComponent },
  { path: 'post/single', component: PostsingleComponent, canActivate: [AuthGuard] },
  { path: 'network-error', component: NetworkerrorComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
