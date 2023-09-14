import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-reader-word',
  templateUrl: './reader-word.component.html',
  styleUrls: ['./reader-word.component.scss']
})
export class ReaderWordComponent {
  @ViewChild('contentWrapper') content: ElementRef;

  translate() {
    const word = this.content.nativeElement.innerText;
  }
}
