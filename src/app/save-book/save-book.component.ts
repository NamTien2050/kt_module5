import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Books} from "../model/books";

@Component({
  selector: 'app-save-book',
  templateUrl: './save-book.component.html',
  styleUrls: ['./save-book.component.css']
})
export class SaveBookComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      title: new FormControl(),
      author: new FormControl(),
      description: new FormControl(),
    })
  }

  createBooks() {
    this.http.post<Books>('http://localhost:3000/books', this.formGroup.value).subscribe((data) => {
      console.log('kq' + data.title);
      this.router.navigate([''])
    })
  }
}
