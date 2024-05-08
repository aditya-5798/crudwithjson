import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/services/movie-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private movieService: MovieServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    if (this.movieService.logoutService()) {
      this.router.navigate(['login']);
    }
  }

}
