import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { LibraryPageComponent } from './pages/library-page/library-page.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { ReaderPageComponent } from './pages/reader-page/reader-page.component';
import { GraphPageComponent } from './pages/graph-page/graph-page.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'sign-in', component: SigninPageComponent },
  { path: 'sign-up', component: SignupPageComponent },
  { path: '', component: CardsPageComponent, canActivate: [AuthGuard] },
  { path: 'words', component: GraphPageComponent, canActivate: [AuthGuard] },
  {
    path: 'library',
    component: LibraryPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'book/:id', component: BookPageComponent, canActivate: [AuthGuard] },
  {
    path: 'book/:id/reader',
    component: ReaderPageComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
