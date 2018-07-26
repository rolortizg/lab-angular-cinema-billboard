import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';

import { MyHomeComponentComponent } from './my-home-component/my-home-component.component';
import { MyMovieComponentComponent } from './my-movie-component/my-movie-component.component';
import { MovieService } from './movie.service';

const routes: Routes = [
  {
    path:'', 
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:MyHomeComponentComponent
  },
  {
    path:'movie/:id',
    component:MyMovieComponentComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    
    MyHomeComponentComponent,
    MyMovieComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
