import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TranslatorService } from '../../services/translator.service';
import { TranslatedWords } from '../../models/translation';
import { ReaderService } from '../../services/reader.service';

enum OnScreenDirection {
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}

@Component({
  selector: 'app-reader-word',
  templateUrl: './reader-word.component.html',
  styleUrls: ['./reader-word.component.scss'],
})
export class ReaderWordComponent {
  @ViewChild('contentWrapper') contentWrapper: ElementRef;
  @ViewChild('word') word: ElementRef;
  @Input() index: number;

  translateData: TranslatedWords;
  posOnScreen: OnScreenDirection;
  translatingLoading = true;
  cardPosLoading = true;
  page: number;

  constructor(
    private translator: TranslatorService,
    private reader: ReaderService
  ) {
    this.reader.page$.subscribe((value) => {
      this.page = value;
    });
  }

  translate() {
    this.translatingLoading = true;
    this.cardPosLoading = true;

    this.posOnScreen = this.getScreenPos();

    this.cardPosLoading = false;

    const word = this.contentWrapper.nativeElement.innerText;
    this.translator.translate(word).subscribe((ret) => {
      this.translateData = ret;
      this.translatingLoading = false;
    });
  }

  getScreenPos(): OnScreenDirection {
    const element = this.word.nativeElement;
    const readerWindow =
      this.word.nativeElement.parentElement.parentElement.parentElement
        .parentElement;

    const topPos = element.offsetTop;
    const leftPos =
      element.offsetLeft - this.page * (readerWindow.offsetWidth + 128);

    const halfWinWidth = readerWindow.offsetWidth / 2;
    const halfWinHeight = readerWindow.offsetHeight / 2;

    if (leftPos < halfWinWidth) {
      if (topPos < halfWinHeight) {
        return OnScreenDirection.topLeft;
      } else {
        return OnScreenDirection.bottomLeft;
      }
    } else {
      if (topPos < halfWinHeight) {
        return OnScreenDirection.topRight;
      } else {
        return OnScreenDirection.bottomRight;
      }
    }
  }
}
