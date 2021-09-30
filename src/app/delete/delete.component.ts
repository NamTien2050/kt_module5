import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Books} from "../model/books";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private activeRoute: ActivatedRoute, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      author: new FormControl(),
      description: new FormControl(),
    })
    this.activeRoute.params.subscribe((data) => this.formGroup.value.id = data.id)
    this.showDelete(this.formGroup.value.id)
  }

  deleteBooks() {
    this.http.delete(`http://localhost:3000/books/${this.formGroup.value.id}`).subscribe((data) => {
      alert('xoa thanh cong')
      this.router.navigate([''])
    })
  }

  showDelete(id: number) {
    this.http.get<Books>(`http://localhost:3000/books/${id}`).subscribe((data) => {
      this.formGroup.get('id')?.setValue(data.id);
      this.formGroup.get('title')?.setValue(data.title);
      this.formGroup.get('author')?.setValue((data.author));
      this.formGroup.get('description')?.setValue((data.description));
    })
  }
}
