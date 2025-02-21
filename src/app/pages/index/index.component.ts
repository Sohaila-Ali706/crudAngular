import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  standalone: false,
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  searchText :any;
  
  constructor() { }
  ngOnInit():void {
   
  }

  users :any =[]

  handelEvent(eve :any){
    this.users.push(eve)
    
  }

  deleteRow(index: number) {
    this.users.splice(index, 1);
  }

  editIndex: number | null = null;
  updatedId: number | null = null;
  updatedName: string = '';
  updatedCountry: string = '';

  editRow(index: number) {
    const item = this.users[index];

    const newId = prompt("Enter new ID:", item.id.toString());
    const newName = prompt("Enter new Name:", item.name);
    const newCountry = prompt("Enter new Country:", item.country);

    if (newId !== null && newName !== null && newCountry !== null) {
      this.users[index].id = parseInt(newId, 10);
      this.users[index].name = newName;
      this.users[index].country = newCountry;
    }
  }

  
}