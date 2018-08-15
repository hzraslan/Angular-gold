import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  serviceAddGame(newGame){
    return this._http.post('/game/new', newGame)
}
getGames(){
 
  return this._http.get('/games');
}
servicedeleteGames(id){
return this._http.delete('/game/'+id+'/remove')
}
}
