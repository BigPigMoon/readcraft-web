import { Injectable } from '@angular/core';
import { data } from 'src/app/data/translation.data';
import { HttpClient } from '@angular/common/http';
import { Translations } from '../models/translation';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslatorService {
  // readonly api_url: string = 'linguee-api.fly.dev'
  readonly api_url: string = '127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  translate(word: string): Observable<Translations> {
    return new Observable<Translations>((subs) => {
      subs.next(data);
    });
    // return this.http
    //   .get<Translations>(`http://${this.api_url}/api/v2/translations`, {
    //     params: {
    //       query: word,
    //       src: 'en',
    //       dst: 'ru',
    //     },
    //     headers: {
    //       'Access-Control-Allow-Origin': '*',
    //     },
    //   })
    //   .pipe(retry(2));
  }
}
