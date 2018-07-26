import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {  MovieService } from '../movie.service'

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {
  id:any;
  movies:any = {};

  constructor(

    private activeRoute: ActivatedRoute,
    private service: MovieService
  ) { }

  ngOnInit() {
    this.activeRoute.params
      .subscribe(params=>{
        console.log(params.id)
        this.id = params.id
        this.movies = this.service.getOneMovie(this.id)
      })
  }

}

