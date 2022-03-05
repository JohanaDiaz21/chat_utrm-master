import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public JWToken = 'TK1983!';
  private API_URL=environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  //Obtiene el token guardado en sesion

  getToken() {
    const token = localStorage.getItem(this.JWToken);
    if (token != 'undefined') {
      return token;
    } else {
      return null;
    }
  }

  logout() {
    localStorage.removeItem(this.JWToken);
  }

  async createUser(user) {
    try {
      return await this.httpClient.post(`${this.API_URL}/create-user`,user).toPromise();
    } catch (e) {
      return {ok:false, message: e};

    }

  }
  public async login(user) {
    try {
      return await this.httpClient.post(`${this.API_URL}/login`,user).toPromise();
    } catch (e) {
      return {ok:false, message: e};

    }

  }
}
