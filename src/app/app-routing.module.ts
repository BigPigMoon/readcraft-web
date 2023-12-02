import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { LibraryPageComponent } from './pages/library-page/library-page.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { ReaderPageComponent } from './pages/reader-page/reader-page.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { MessangerPageComponent } from './pages/messanger-page/messanger-page.component';
import { CoursePageComponent } from './pages/course-page/course-page.component';

const routes: Routes = [
  { path: 'sign-in', component: SigninPageComponent },
  { path: 'sign-up', component: SignupPageComponent },
  { path: '', component: CardsPageComponent },
  { path: 'library', component: LibraryPageComponent },
  { path: 'course', component: CoursePageComponent },
  { path: 'messanger', component: MessangerPageComponent },
  { path: 'book/:id', component: BookPageComponent },
  { path: 'book/:id/reader', component: ReaderPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
