import { Component, Output, Input, EventEmitter, OnInit  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/models/WishItem';

//skapar upp en filters array för att få det lite snyggare.
//på vilken index position som skickas in (0) för att visa alla items
const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
 ];



@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})




export class WishFilterComponent implements OnInit{
  
  ngOnInit(): void {
    this.UpdateFilter('0');
  }
  
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();

    
     listFilter : any = '0';


    UpdateFilter(value: any) {
      this.filter = filters[value];
      this.filterChange.emit(this.filter);
    }
}
