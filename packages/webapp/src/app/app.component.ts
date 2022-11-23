import {Component, OnInit} from '@angular/core';
import {ChatRelayMessage, SystemNotice, User} from "@/types";
import {AppService} from "./app.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'chat-room-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'webapp';

  messages: ChatRelayMessage[] = []
  users: User[] = []
  currentUser: User

  constructor(private appService: AppService, private snackbar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.appService.chatMessage$.subscribe(msg => this.messages = [...this.messages, msg])
    this.appService.user$.subscribe(user => this.currentUser = user)
    this.appService.systemNotice$.subscribe(notice => this.onSystemNotice(notice))
    this.appService.userList$.subscribe(users => this.users = users)
  }

  connect(userNameInput: HTMLInputElement) {
    console.log(`Connecting as ${userNameInput.value}`)
    this.appService.connect(userNameInput.value)
  }

  send(chatInput: HTMLInputElement) {
    this.appService.send(chatInput.value)
    chatInput.value = ""
  }

  onSystemNotice(notice: SystemNotice) {
    this.snackbar.open(notice.contents, undefined, { duration: 5000})
  }
}
