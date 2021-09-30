import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Books} from "../model/books";

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {
  books: Books[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.bookShow();
  }

  bookShow() {
    this.http.get<Books[]>('http://localhost:3000/books').subscribe((data) => {
      this.books = data;
    })
  }
}
