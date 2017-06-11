import {Component, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import {Ingredient} from '../../shared/ingredients.model'
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name') nameValue: ElementRef;
  @ViewChild('amount') amountValue: ElementRef;
  @Output() addSecondEvent = new EventEmitter<Ingredient>();

  addMethod(){
    const mname = this.nameValue.nativeElement.value;
    const mamount = this.amountValue.nativeElement.value;
    const newIngredient = new Ingredient(mname,mamount);
    this.addSecondEvent.emit(newIngredient);
  }
  constructor() { }

  ngOnInit() {
  }

}
