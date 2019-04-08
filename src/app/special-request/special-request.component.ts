import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SpecialRequestDialogComponent } from './special-request-dialog/special-request-dialog.component';

@Component({
  selector: 'app-special-request',
  templateUrl: './special-request.component.html',
  styleUrls: ['./special-request.component.scss']
})
export class SpecialRequestComponent implements OnInit {

  image = '/src/assets/extra/marble_texture.jpg'

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openSpecialRequestDialog(): void {
    const dialogRef = this.dialog.open(SpecialRequestDialogComponent,
      {panelClass: 'special-request-dialog-configuration'
      }
      );
  }

}
