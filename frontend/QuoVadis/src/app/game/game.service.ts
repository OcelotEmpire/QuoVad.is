import { Injectable } from '@angular/core';
import { RxStomp } from '@stomp/rx-stomp';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private client: RxStomp;

  constructor() {
    this.client = new RxStomp();
  }

  public connect(): void {
    this.client.configure(environment.wsConfig);
    this.client.activate();
  }
}
