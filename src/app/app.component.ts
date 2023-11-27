import { ParseTreeResult } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Practice';
//event
//getData(val:string){
//console.warn(val)
//}
//
  getName(name:any){
    alert("Welcome angular")
  }
  //If-Else Condition
  show=true;

//Two way binding
  name:any;

 //Templateform
  data='X';
  userLogin(item:any){
    console.warn(item);
  }

  //pipes
  today=Date()
  getval(item:any){
  console.warn(item)
  }

  ////send data parent to child
  updateData(item:string){
    console.warn(item)
    this.data=item;
  }

/////For Loop
  color="red";
 //name= 'Dummy';
 userData:any={};

 users=['Achal','Ashwini','Komal','Priya','Arati']
 usersDetails=[
  {name:'Achal', email: 'achal@demo.com', pass:1234 ,Social:['Insta','Twitter']},
  {name:'Ashwini', email: 'ashwini@demo.com', pass:3456,Social:['Youtube','Twitter']},
  {name:'Komal', email: 'komal@demo.com', pass:4567,Social:['Facebook','Twitter']},
  {name:'Priya', email: 'priya@demo.com', pass:5678,Social:['Insta','Youtube']},
  {name:'Arati', email: 'arati@demo.com', pass:6789,Social:['Facebook','Twitter']}
]

//style binding
 disable=false;
 bgcolor="green";
 count=0
 counter(type:string){
  type=='add' ?this.count++:this.count--
 }
updateColor(){
  this.color="Blue"
  this.bgcolor="pink"


}

//FormModule
  getData(data:any){
    console.warn(data);
    this.userData=data
  }

  //toggle
 display=true
  toggle(){
  this.display=!this.display;
  }
 //Login
  loginForm=new FormGroup({
  user:new FormControl('',Validators.required),
  password:new FormControl('123@00a'),
})
loginUser(){
  console.warn(this.loginForm.value)
} 
}



