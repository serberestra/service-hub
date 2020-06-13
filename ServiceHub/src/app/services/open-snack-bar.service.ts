import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class OpenSnackBarService {

  constructor(private _snackBar?: MatSnackBar) { }

  open(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
