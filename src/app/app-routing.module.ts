import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { LibraryPageComponent } from './pages/library-page/library-page.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { ReaderPageComponent } from './pages/reader-page/reader-page.component';
import { GraphPageComponent } from './pages/graph-page/graph-page.component';

const routes: Routes = [
  { path: '', component: CardsPageComponent },
  { path: 'words', component: GraphPageComponent },
  { path: 'library', component: LibraryPageComponent },
  { path: 'book/:id', component: BookPageComponent },
  { path: 'book/:id/reader', component: ReaderPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
