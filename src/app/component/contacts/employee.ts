export class Employee {
  name: string;
  surname: string;
  img: string;
  email: string;
  role: string;
  group: string;
  header: boolean;
  constructor(name: string, surname: string, img: string, email: string, role: string, group: string, header: boolean = false) {
    this.name = name;
    this.surname = surname;
    this.img = img;
    this.email = email;
    this.role = role;
    this.group = group;
    this.header = header;
  }

  getImage(): string {
    return 'assets/emps/' + this.img;
  }
}
