import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, shareReplay } from 'rxjs/operators';

interface Book {
  id: number;
  titleName: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 5';

  private init$: Observable<any>;

  constructor(private readonly http: HttpClient) {}
  public ngOnInit() {
    const LogBook = (book: Book) => {
      console.log(book);
      console.log(book.id);
      console.log(book.titleName);
    };

    var result = this.http
      .get<Book>('https://1wko9.wiremockapi.cloud/nonCase')
      .pipe(
        map((data) => {
          return data;
        })
      )
      .subscribe((val) => LogBook(val));

    var result = this.http
      .get<Book>('https://1wko9.wiremockapi.cloud/case')
      .pipe(
        map((data) => {
          return data;
        })
      )
      .subscribe((val) => LogBook(val));
  }
}
