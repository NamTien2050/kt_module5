export class Books {
  id!: number;
  title!: String;
  author!: String;
  description!: String;

  constructor(id: number, title: String, author: String, description: String) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.description = description;
  }
}
