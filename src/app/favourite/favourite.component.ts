import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.css'
})
export class FavouriteComponent {
  @Input("is-favourite") isFavourite:boolean = false;
  @Output("change") click = new EventEmitter();

  onClick() {
    this.isFavourite = !this.isFavourite;
    this.click.emit({newValue: this.isFavourite}); 
  }
}
