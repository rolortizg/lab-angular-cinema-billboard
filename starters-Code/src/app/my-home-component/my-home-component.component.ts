import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {

  movieList:Array<any> = []

  constructor(
    public service: MovieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.movieList = this.service.getMovies();
    console.log(this.movieList)
  }

}
