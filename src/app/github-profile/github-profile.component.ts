import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // const username = this.route.snapshot.paramMap.get("username");
    // console.log(username);

    this.route.paramMap.subscribe({
      next: (params => {
        const username = params.get("username");
        console.log(username)
      })
    })
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: {
        page: 1,
        order: 'newest'
      }
    })
  }

}
