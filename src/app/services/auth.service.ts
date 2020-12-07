import { Injectable } from '@angular/core';




@Injectable()
export class AuthService {
  private email: string;

  constructor() {

  }


  setMail(mail: string) {

    this.email = mail

    console.log("service user", this.email)

  }

  getEmail() {
    return this.email
  }
}


