import { Component, Input } from '@angular/core';
import { WishItem } from '../../shared/models/WishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListItemComponent } from '../wish-list-item/wish-list-item.component';


@Component({
    selector: 'wish-list',
    standalone: true,
    templateUrl: './wish-list.component.html',
    styleUrl: './wish-list.component.css',
    imports: [CommonModule, FormsModule, WishListItemComponent]
})


export class WishListComponent {

  @Input() wishes : WishItem[] = [];

}
