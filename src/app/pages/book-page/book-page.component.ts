import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {
  bookId: string | null;
  book = {
    title: "Ведьмак",
    author: "Анжей Сапковский",
    progress: 30,
    cover: "https://img3.labirint.ru/rc/590d01bcd8c7c5c336da43793552e082/363x561q80/books74/732953/cover.jpg?1579076758"
  }

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('id');
  }
}
