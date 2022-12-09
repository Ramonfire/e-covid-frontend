import { Injectable } from '@angular/core';
import {InMemoryDbService, RequestInfo}from'angular-in-memory-web-api'
import { CONTENUS } from './mock-contenu';



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const contenus = CONTENUS
    return { contenus};
  }
}
