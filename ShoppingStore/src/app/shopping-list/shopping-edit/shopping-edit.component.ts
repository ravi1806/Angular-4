import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Ingredient} from '../../shared/ingredients.model';
import {ShoppingListService} from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name') nameValue: ElementRef;
  @ViewChild('amount') amountValue: ElementRef;


  addMethod() {
    const mname = this.nameValue.nativeElement.value;
    const mamount = this.amountValue.nativeElement.value;
    const newIngredient = new Ingredient (mname, mamount);
    this.slService.addIngredient(newIngredient);
  }
  constructor(private slService: ShoppingListService) {
  }

  ngOnInit() {
  }

}
