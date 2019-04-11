import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-inquiry-confirmation',
  templateUrl: './inquiry-confirmation.component.html',
  styleUrls: ['./inquiry-confirmation.component.scss']
})
export class InquiryConfirmationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<InquiryConfirmationComponent>) { }

  ngOnInit() {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
