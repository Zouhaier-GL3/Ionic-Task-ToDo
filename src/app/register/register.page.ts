import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: string = ""
  password: string = ""
  constructor(public fAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  async register() {
    const { email, password } = this
    try {
      const res = await this.fAuth.createUserWithEmailAndPassword(email, password);
      console.log(res)
    } catch (error) {
      console.dir(console.error())

    }
  }

}
