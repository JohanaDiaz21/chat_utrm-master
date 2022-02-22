import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {UserServiceService} from 'src/app/services/user-service.service';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage implements OnInit{
  public email: string;
  public password: string;

  constructor(
    private router: Router ,
    public alertController: AlertController,
   private userService:UserServiceService ) {
  }
  ngOnInit() {
  }
  redirect(url) {
    this.router.navigateByUrl(url);
  }

  Inciar() {
    this.router.navigate(['/tabs/home']);
  }

  async signIn(key: string){
    console.log(this.email, this.password);
    if(this.email === 'admin' && this.password === '123'){
      localStorage.getItem(this.userService.JWToken, );
      this.redirect('/login');
    } else {
      await this.presentAlert('Error', '', 'User not found');
    }
  }

  async presentAlert(h: string, subtitle: string, msn: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: h,
      subHeader: subtitle,
      message: msn,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}

