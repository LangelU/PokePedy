import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  protected _showSpinner = new BehaviorSubject<boolean>(false);
  constructor() { }

  get showSpinner$() {
    return this._showSpinner.asObservable();
  }

  show() {
    this._showSpinner.next(true);
  }

  hide() {
    this._showSpinner.next(false);
  }
}
