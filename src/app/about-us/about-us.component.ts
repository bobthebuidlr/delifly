import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { VideoDialogComponent } from './video-dialog/video-dialog.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  openVideo(): void {
    this.dialog.open(VideoDialogComponent, {
      panelClass: 'dialog-no-padding'
    });
  }

}
