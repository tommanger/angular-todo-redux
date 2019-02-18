import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private store: Store<any>) { }


  getAllState() {
    return this.store.select('appReducer')
  }
  addToState({ payload, action }) {
    payload.id = this.getRandomIntInclusive(800, 999)
    this.store.dispatch({
      type: action,
      payload
    })
  }
  updateState({ payload, action }){
    this.store.dispatch({
      type: action,
      payload
    })
  }
  removeFromState({ action, payload }) {
    this.store.dispatch({
      type: action,
      payload
    })
  }
  private getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min + 'aidi'; //The maximum is inclusive and the minimum is inclusive 
  }
}
