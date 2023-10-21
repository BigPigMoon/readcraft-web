import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LearningWordTableComponent } from './components/learning-word-table/learning-word-table.component';
import { LearningStatisticComponent } from './components/learning-statistic/learning-statistic.component';
import { LibraryPageComponent } from './pages/library-page/library-page.component';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { NgOptimizedImage } from '@angular/common';
import { SerachbarComponent } from './components/serachbar/serachbar.component';
import { WordCardComponent } from './components/word-card/word-card.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { ReaderPageComponent } from './pages/reader-page/reader-page.component';
import { NavigationWrapperComponent } from './components/navigation-wrapper/navigation-wrapper.component';
import { FormsModule } from '@angular/forms';
import { ReaderTextComponent } from './components/reader-text/reader-text.component';
import { ReaderWordComponent } from './components/reader-word/reader-word.component';
import { FeatureFilterPipe } from './pipes/feature-filter.pipe';
import { GraphPageComponent } from './pages/graph-page/graph-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    SigninPageComponent,
    NavigationComponent,
    LearningWordTableComponent,
    LearningStatisticComponent,
    LibraryPageComponent,
    CardsPageComponent,
    BookCardComponent,
    SerachbarComponent,
    WordCardComponent,
    BookPageComponent,
    ReaderPageComponent,
    NavigationWrapperComponent,
    ReaderTextComponent,
    ReaderWordComponent,
    FeatureFilterPipe,
    GraphPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
