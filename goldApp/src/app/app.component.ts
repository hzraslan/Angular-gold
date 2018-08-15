import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  results =[];
  earn ;
  golds = 0;
  newGame: any;
  games;
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.getGamesFromService();
    this.golds;
    this.results;
    // this.games;
    
  }
  farm(){
    this.earn = Math.floor( (Math.random()  * 4 ) + 2);
    this.golds = this.golds + this.earn;
    this.results.unshift('you earned '+this.earn+ ' gold at the farm');
  }
  cave(){
    this.earn = Math.floor( (Math.random()  * 6 ) + 5);
    this.golds = this.golds + this.earn;
    this.results.unshift('you earned '+this.earn+ ' gold at the cave')
  }
  house(){
    this.earn = Math.floor( (Math.random()  * 9 ) + 7);
    this.golds = this.golds + this.earn;
    this.results.unshift('you  earned '+this.earn+ ' gold at the house')
  }
  casino(){
    this.earn = Math.floor(100 - (Math.random()  * 200 ));
    this.golds = this.golds + this.earn;
    if(this.earn >= 0){
      this.results.unshift('you  earned '+this.earn+ ' gold at the casino')
    }else{
      this.results.unshift('you lost '+this.earn+ ' gold at the casino')
    }
  }
  restart(){
    this.golds = 0;
    this.results = []
  }
  save(){
    this.newGame = { name: 'Game: ', result: this.results, gold: this.golds };
    let observable= this._httpService.serviceAddGame(this.newGame);
    console.log(this.newGame);
    observable.subscribe(data => {
      this.getGamesFromService();
    })
    

  }
  getGamesFromService(): void {
    let observable = this._httpService.getGames();
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
    this.games = data;

  });
}
deleteGame(id){
  
  this._httpService.servicedeleteGames(id)
  .subscribe(data=>{
    this.getGamesFromService();
  })
}
}
