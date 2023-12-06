import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-line',
  templateUrl: './course-line.component.html',
  styleUrls: ['./course-line.component.scss'],
})
export class CourseLineComponent {
  @Input() courseTitle = '';
  @Input() author = false;
}
