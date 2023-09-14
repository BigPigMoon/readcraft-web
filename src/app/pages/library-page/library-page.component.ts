import {Component} from '@angular/core';
import {IBook} from "../../models/Book";

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.scss'],
})
export class LibraryPageComponent {
  books: IBook[] = [
    {
      title: "Ведьмак",
      author: "Анжей Сапковский",
      progress: 30,
      cover: "https://img3.labirint.ru/rc/590d01bcd8c7c5c336da43793552e082/363x561q80/books74/732953/cover.jpg?1579076758"
    },
    {
      title: "Ведьмак",
      author: "Анжей Сапковский",
      progress: 40,
      cover: "https://img3.labirint.ru/rc/590d01bcd8c7c5c336da43793552e082/363x561q80/books74/732953/cover.jpg?1579076758"
    },
    {
      title: "Ведьмак",
      author: "Анжей Сапковский",
      progress: 50,
      cover: "https://img3.labirint.ru/rc/590d01bcd8c7c5c336da43793552e082/363x561q80/books74/732953/cover.jpg?1579076758"
    },
    {
      title: "Ведьмак",
      author: "Анжей Сапковский",
      progress: 50,
      cover: "https://img3.labirint.ru/rc/590d01bcd8c7c5c336da43793552e082/363x561q80/books74/732953/cover.jpg?1579076758"
    },
    {
      title: "Ведьмак",
      author: "Анжей Сапковский",
      progress: 50,
      cover: "https://img3.labirint.ru/rc/590d01bcd8c7c5c336da43793552e082/363x561q80/books74/732953/cover.jpg?1579076758"
    },
    {
      title: "Ведьмак",
      author: "Анжей Сапковский",
      progress: 50,
      cover: "https://img3.labirint.ru/rc/590d01bcd8c7c5c336da43793552e082/363x561q80/books74/732953/cover.jpg?1579076758"
    },
    {
      title: "Ведьмак",
      author: "Анжей Сапковский",
      progress: 50,
      cover: "https://img3.labirint.ru/rc/590d01bcd8c7c5c336da43793552e082/363x561q80/books74/732953/cover.jpg?1579076758"
    },
  ];
}
