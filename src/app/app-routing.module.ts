import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CardsPageComponent} from './pages/cards-page/cards-page.component';
import {WordsPageComponent} from './pages/words-page/words-page.component';
import {LibraryPageComponent} from './pages/library-page/library-page.component';
import {StatisticsPageComponent} from './pages/statistics-page/statistics-page.component';
import {BookPageComponent} from "./pages/book-page/book-page.component";

const routes: Routes = [
  {path: '', component: CardsPageComponent},
  {path: 'words', component: WordsPageComponent},
  {path: 'library', component: LibraryPageComponent},
  {path: 'statistic', component: StatisticsPageComponent},
  {path: 'book/:id', component: BookPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
