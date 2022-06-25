import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GihubFollowersService } from '../services/github-followers/gihub-followers.service';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: any;

  constructor(private route: ActivatedRoute, private service: GihubFollowersService) { }

  ngOnInit(): void {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).pipe(
      switchMap(combined => {
        const id = combined[1].get("order");
        const page = combined[1].get("page");
        console.log(id, page);

        return this.service.getAll()
      })
    ).subscribe(followers => {
      this.followers = followers;
    })
  }
}
