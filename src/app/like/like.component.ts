import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrl: './like.component.css'
})
export class LikeComponent {
  @Input("likesCount") likesCount: number = 0;
  @Input("isActive") isLiked: boolean = false;
  @Output("change") click = new EventEmitter();

  onClick() {
    this.isLiked = !this.isLiked;
    this.likesCount += this.isLiked ? 1 : -1;
    this.click.emit()
  }
}
