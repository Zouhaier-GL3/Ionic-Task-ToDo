
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  currentDate: string;
  // tslint:disable-next-line: no-inferrable-types
  newTask: string = '';
  allTasks = [];
  constructor(private router: Router, private angFire: AngularFireDatabase, private fAuth: AngularFireAuth) {

  const todayDate = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  this.currentDate = todayDate.toLocaleDateString('ar-AR', options);
  }
  ngOnInit(){
    this.getTasks();
  }
  getTasks() {
    this.angFire.list('/Task').snapshotChanges(['child_added']).subscribe(
//  this.angFire.list('Tasks/', ref => ref.orderByChild('userId').equalTo(uid)).snapshotChanges(['child_added']).subscribe(
      (reponse) => {
        console.log(reponse);
        this.allTasks = [];
        reponse.forEach(element => {
          console.log(element.payload);
          this.allTasks.push({
            key: element.key,
            text: element.payload.exportVal().text,
            checked: element.payload.exportVal().checked,
            date: element.payload.exportVal().date.substring(11, 16),
          });
        });
      }
    );
  }
  logout(){
    console.log("Logout");
    this.router.navigateByUrl('/login');
  }
  donetask(){
      console.log("Filter");
      this.router.navigateByUrl('/home');
  }
  stilltask(){
    console.log("Still");
    this.router.navigateByUrl('/home');
}


  changeCheckedState(tsk) {
    this.angFire.object(`Task/${tsk.key}/checked`).set(tsk.checked);
  }
  addNewTask() {
    this.angFire.list('Task/').push({
      text: this.newTask,
      checked: false,
      date: new Date().toISOString()
    });
    this.newTask = '';
    }
  }
