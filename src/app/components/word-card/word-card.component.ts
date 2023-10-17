import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-word-card',
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.scss']
})
export class WordCardComponent {
  @Input() isGroup = false;
  @Input() index = "";

  onDragStart(event: DragEvent) {
    const item = event.target as HTMLElement;
    event.dataTransfer?.setData('text/plain', item.id);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();

    const item = event.dataTransfer?.getData('text/plain')

    if (this.isGroup && item) {
      console.log('element of', item, 'drop into', this.index);
      document.getElementById(item)?.remove();
    }
  }
}
