import {Component} from '@angular/core';
import {WebSocketService} from "../../services/web-socket.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent {
  private socketSubscription: Subscription;

  constructor(private webSocketService: WebSocketService) {
  }

  ngOnInit() {
    this.socketSubscription = this.webSocketService.connect('ws://localhost:3000')
      .subscribe((data) => {
        console.log(data);
      });
  }

  ngOnDestroy() {
    this.socketSubscription.unsubscribe();
    this.webSocketService.close();
  }

  sendMessage() {
    this.webSocketService.send("hello server!!");
  }
}
