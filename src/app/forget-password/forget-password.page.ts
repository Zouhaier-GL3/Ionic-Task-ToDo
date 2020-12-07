import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'
import { Button } from 'protractor';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {
  email: string = ""


  constructor(private alerController: AlertController, public fAuth: AngularFireAuth, private router: Router) { }
  envoiMail() {
    this.fAuth.sendPasswordResetEmail(this.email);
    /* let prompt=this.alerController.create({
      message:"A new password will be sent to your mail",
      inputs:[
        {
        name: 'email',
        },
      ],
      buttons:[
        {
          text: 'Submit',
          handler:data=>{
            this.fAuth.sendPasswordResetEmail(email);
          }
        }
      ]

    }) */


  }
  loginPage() {
    this.router.navigate(['/login']);

  }
  ngOnInit() {
  }

}
