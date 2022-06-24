import { Component, Input, OnInit } from '@angular/core';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  faHeartSolid = faHeartSolid;
  faHeartRegular = faHeartRegular;
  @Input('is-liked') isActive: boolean = false;
  @Input('like-count') likeCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  toggleIsActive() {
    this.isActive = !this.isActive;
    if (this.isActive) this.likeCount += 1;
    else this.likeCount -= 1;
  }

}
