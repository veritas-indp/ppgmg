import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ppg-membergetter';

  board: string = 'pol';
  thread: number = 0;

  constructor(private http: HttpClient) { }


  displayedColumns: string[] = ['name', 'tripcode'];
  dataSource;

  getTripcodes() {
    let test = [];
    this.http.get('https://cors-anywhere.herokuapp.com/https://a.4cdn.org/' +
      this.board + '/thread/' + this.thread + '.json').subscribe(r => {
        (r as any).posts.forEach(post => {
          if (post.trip !== undefined &&
            test.filter(o => o.tripcode === post.trip).length === 0) {
            if (test.filter(o => o.name === post.name).length === 0) {
              test.push({ name: post.name, tripcode: [post.trip], });
            } else {
              if (!test.filter(o => o.name === post.name)[0].tripcode.includes(post.trip)) {
                test.filter(o => o.name === post.name)[0].tripcode.push(post.trip);
              }
            }
          }
        });
        this.dataSource = test;
        console.log(test.sort());
      });
  }

  displayArray(s: string[]) {
    return s.join(' <p> ');
  }

}
