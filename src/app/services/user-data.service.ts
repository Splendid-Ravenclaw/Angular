import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  users(){
    return[
      {name:'Achal', age:'22', email:'achal@Test.com'},
      {name:'simran', age:'21', email:'simaran@Test.com'},
      {name:'Unnati', age:'20', email:'unnati@Test.com'}
    ]
  }
  saveUsers(data:any){
    
  }
}
