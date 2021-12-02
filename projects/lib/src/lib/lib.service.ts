import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LibService {
  constructor() {
    console.log('This is LibService');
  }
}
