import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listadeusuarios',
  templateUrl: './listadeusuarios.page.html',
  styleUrls: ['./listadeusuarios.page.scss'],
})
export class ListadeusuariosPage implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  gotohome() {
    this.router.navigate(['/home']);
  }
  gotochat() {
    this.router.navigate(['/chat']);
  }


}
