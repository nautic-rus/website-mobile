export class Vacant {
  name: string;
  responsibilities: string[];
  requirements: string[];
  conditions: string[];
  salary: string;
  experience: string;
  office: string;
  metro: string;
  indexPath = 0;
  constructor(name: string) {
    this.name = name;
  }
  getNameUpper(): string{
    return this.name.toUpperCase();
  }
}
