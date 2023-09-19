import {Component, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-reader-text',
  templateUrl: './reader-text.component.html',
  styleUrls: ['./reader-text.component.scss']
})
export class ReaderTextComponent {
  @Input() content: string;
  @Input() format: string;
}
