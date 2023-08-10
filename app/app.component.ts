import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, shareReplay } from 'rxjs/operators';

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
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
    var result = this.http
      .get<{ item: ToDo[] }>('https://rxjsmaptest.free.beeceptor.com/')
      .pipe(map((data) => data));
    result.subscribe((val) => console.log(val));
  }
}
