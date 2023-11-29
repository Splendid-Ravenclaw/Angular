import { Injectable } from '@angular/core';
interface dataType{
  name:string,
  id:number,
  indian:boolean,
  address:any
  }

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getData(){
    const data={
      name:'aria sigh',
      id:100,
      indian:"true",
      address:"54, kanada"
    }
    return data;
  }
}

