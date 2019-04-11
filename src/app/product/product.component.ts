import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material';
import { InquiryConfirmationComponent } from './inquiry-confirmation/inquiry-confirmation.component';

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  product = {
    introduction: {
      header: {
        firstPart: "Rolex",
        highlighted: "Cosmograph Daytona",
        secondPart: "Oystersteel"
      },
      subtext:
        "Rolex uses Oystersteel for its steel watch cases. Specially developed by the brand, Oystersteel belongs to the 904L steel family, alloys most commonly used in high-technology and in the aerospace and chemical industries, where maximum resistance to corrosion is essential. Oystersteel is extremely resistant."
    },
    images: [
      "/assets/products/watches/1941_remontoire_constant.png",
      "/assets/products/watches/1948_bespoke_movement_remontoire.png"
    ]
  };

  explanation =  {
    header: {
      firstPart: "Interested? Feel free to ",
      highlighted: "inquire"
    },
    subtext: {
      firstParagraph: "We will bring the product to your private jet and present it to you in your plane or on the airport, no strings attached.",
      secondParagraph: "We understand that discretion is one of the most valuable assets to maintain your privacy. Therefore we do not ask any information from you, so don't worry. Everything will be completely anonymous unless you desire otherwise. We will inform your personal flight manager at your chosen private jet charter about your inquiry." 
    } 
  }

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  public openInquiryConfirmationDialog(): void {
    const dialogRef = this.dialog.open(InquiryConfirmationComponent, {
      panelClass: 'inquiry-confirmation-configuration'
    }
      );
  }
  
}
