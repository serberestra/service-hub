import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class OpenSnackBarService {

  /**
   * 
   * @param _snackBar Required for purpose of class
   */
  constructor(private _snackBar?: MatSnackBar) { }

  /**
   * Dispenses angular material message
   * @param message message in question to be called from class
   * @param action type of message to open
   */
  open(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
