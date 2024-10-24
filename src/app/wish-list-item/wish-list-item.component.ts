import { Component, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItem } from '../../shared/models/WishItem';
import { EventService } from '../../shared/models/services/EventServices';


@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent{


  @Input() wish! : WishItem;


  constructor(private events: EventService) { }

  get cssClasses() {
    return {'strikeout text-muted': this.wish.isComplete} ;
  }

  toggleFullfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }


}
