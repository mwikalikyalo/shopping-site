import { Component } from '@angular/core';
import { Observable, of, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-site';

  // //example of an observable using observable constructor
  // myObservable= new Observable((observer/*subscriber*/) => {
  //   console.log("Observable starts!")
  //   //data to be emitted
  //   observer.next("1")
  //   observer.next("2")
  //   observer.next("3")
  //   observer.next("4")
    
  // })


  // //using create method- calling observable constructor
  // myObservable= Observable.create((observer:any)=>{
  //   setTimeout(()=>{observer.next("1")}, 1000)
  //   setTimeout(()=>{observer.next("2")}, 2000)
  //   setTimeout(()=>{observer.next("3")}, 3000)
  //   setTimeout(()=>{observer.next("4")}, 4000)
  //   setTimeout(()=>{observer.error((new Error("There has been an error while logging in.")))}, 4000)
  //   setTimeout(()=>{observer.complete("4")}, 4000)
  // })


  // //using an of operator- emits complete signal and array as is. Takes more than one argument
  // array1= [1,2,3,4]
  // array2= ["a","b","c","d"]

  // myObservable= of(this.array1, this.array2)


  // //using a from operator- emits each array value and takes one argument
  // myObservable= from(this.array1)

  // ngOnIt(){
    //initiate the observable needed for the observable to work
//     this.myObservable.subscribe((val) => {
//       console.log(val);
//     }, (error) => {
//         alert(error.message)

//       }, () => {
//         alert("Complete!")
//       }
//   )};
}