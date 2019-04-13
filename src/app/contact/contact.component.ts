import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  messageSend = false;

  constructor() {}

  ngOnInit() {}

  private sendMessage() {
    this.messageSend = true;
    console.log("The following message has been send: ");
  }
}
