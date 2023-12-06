import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Input() imageUrl = '';
  @Input() imageAlt = '';
  @Input() lessonTitle = '';
  @Input() description = '';
}
