import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WishItem } from '../../shared/models/WishItem';


@Component({
  selector: 'add-wish-form',
  standalone: true,
  imports: [CommonModule ,FormsModule,
  ],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})

export class AddWishFormComponent {
  
  @Output() addWish = new EventEmitter<WishItem>();

  newWishText = '';
  
  AddNewWish() 
  {
    this.addWish.emit(new WishItem(this.newWishText));
    this.newWishText = '';
  }
}
