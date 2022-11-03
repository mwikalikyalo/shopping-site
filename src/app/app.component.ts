import { Component } from '@angular/core';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-site';

  // //example of an observable
  // myObservable= new Observable((observer/*subscriber*/) => {
  //   console.log("Observable starts!")
  //   //data to be emitted
  //   observer.next("1")
  //   observer.next("2")
  //   observer.next("3")
  //   observer.next("4")
  // })

  // ngOnIt(){
  //   //initiate the observable needed for the observable to work
  //   this.myObservable.subscribe((val) => {
  //     console.log(val)
  //   })
  // }
}
