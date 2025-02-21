import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Output() userDetails = new EventEmitter()

model ={
  id : '',
  name : '',
  country : '',
}

hadelClick(){
  const obj = {
    id : this.model.id ,
  name : this.model.name,
  country : this.model.country,
  }
  this.userDetails.emit(obj)
}

}
