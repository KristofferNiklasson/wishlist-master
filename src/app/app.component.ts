import { Component, OnInit } from '@angular/core';
import { WishItem } from '../shared/models/WishItem';
import { WishListComponent } from "./wish-list/wish-list.component";
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { EventService } from './../shared/models/services/EventServices';
import { HttpClientModule } from '@angular/common/http';
import { WishService } from './wish.service';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';




@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [WishListComponent,
            AddWishFormComponent,
            WishFilterComponent, 
            HttpClientModule,
            WishListItemComponent
            ]
})


export class AppComponent implements OnInit {
  items! : WishItem[];
  filter: any;


  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish: any) => {
      let index = this.items.indexOf(wish);
        if(index !== -1) {
          this.items.splice(index, 1);
        }
    });
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data: any) => {
      this.items = data;
    });
  }

  //Getter from javascript, kallar på filter beroende vilken index som kallas.
  get visibleItems(): WishItem[] {
    return this.items.filter(this.filter);
  };

}


