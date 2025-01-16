import { Injectable } from '@angular/core';

import { AngularFireStore } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private dataBaseStore: AngularFireStore) { }
}
