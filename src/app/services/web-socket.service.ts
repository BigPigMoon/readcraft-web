import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {io, Socket} from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket: Socket;
  private subject: Subject<string>;

  constructor() {
  }

  connect(url: string): Subject<any> {
    if (!this.socket || this.socket.disconnected) {
      this.socket = io(url, {auth: {token: 'dljsfldjfldksjfklj'}});
      this.subject = new Subject<string>();

      this.socket.on("message", (event) => {
        this.subject.next(event);
      });
    }

    return this.subject;
  }

  send(message: string): void {
    if (this.socket && this.socket.connected) {
      this.socket.emit("message", message);
    }
  }

  close(): void {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
