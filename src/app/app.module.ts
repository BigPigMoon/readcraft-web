import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StatisticsPageComponent} from './pages/statistics-page/statistics-page.component';
import {SignupPageComponent} from './pages/signup-page/signup-page.component';
import {SigninPageComponent} from './pages/signin-page/signin-page.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {LearningWordTableComponent} from './components/learning-word-table/learning-word-table.component';
import {LearningStatisticComponent} from './components/learning-statistic/learning-statistic.component';
import {WordsPageComponent} from './pages/words-page/words-page.component';
import {LibraryPageComponent} from './pages/library-page/library-page.component';
import {CardsPageComponent} from './pages/cards-page/cards-page.component';
import {BookCardComponent} from './components/book-card/book-card.component';
import {NgOptimizedImage} from "@angular/common";
import {SerachbarComponent} from './components/serachbar/serachbar.component';
import {WordCardComponent} from './components/word-card/word-card.component';
import {BookPageComponent} from './pages/book-page/book-page.component';
import {ReaderPageComponent} from './pages/reader-page/reader-page.component';
import {NavigationWrapperComponent} from './components/navigation-wrapper/navigation-wrapper.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    StatisticsPageComponent,
    SignupPageComponent,
    SigninPageComponent,
    NavigationComponent,
    LearningWordTableComponent,
    LearningStatisticComponent,
    WordsPageComponent,
    LibraryPageComponent,
    CardsPageComponent,
    BookCardComponent,
    SerachbarComponent,
    WordCardComponent,
    BookPageComponent,
    ReaderPageComponent,
    NavigationWrapperComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgOptimizedImage, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
