import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { GalleryService } from "../gallery/gallery.service";
import { InquiryConfirmationComponent } from "./inquiry-confirmation/inquiry-confirmation.component";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {

  @ViewChild('video') elementRef;

  firstParagraphStyling = {
    'width': '100%',
    'align-items': 'center',
    'margin-bottom': '100px'
  }
  
  product;

  explanation = {
    header: {
      firstPart: "Interested? Feel free to ",
      highlighted: "inquire"
    },
    subtext: {
      firstParagraph:
        "We will bring the product to your private jet and present it to you in your plane or on the airport, no strings attached.",
      secondParagraph:
        "We understand that discretion is one of the most valuable assets to maintain your privacy. Therefore we do not ask any information from you, so don't worry. Everything will be completely anonymous unless you desire otherwise. We will inform your personal flight manager at your chosen private jet charter about your inquiry."
    }
  };

  defaultDetailsDescription = 'The Daytona’s chronograph functions are activated by pushers that screw down like the winding crown when they are not in use, guaranteeing waterproofness to 100 metres. One press to start, stop or reset the chronograph produces a crisp, clear click that was perfected using the most advanced technology. Rolex watchmakers also perfected the mechanism to suit the ideal finger pressure on the pushers.'
  defaultDescription = 'Specially developed by the brand, Oystersteel belongs to the 904L steel family, alloys most commonly used in high-tech and in the aerospace and chemical industries where maximum resistance to corrosion is essential.'
  constructor(
    public dialog: MatDialog,
    private galleryService: GalleryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    let id = this.route.snapshot.paramMap.get("id");
    this.product = this.galleryService.getProduct(+id);
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.muted = true;
  }

  public openInquiryConfirmationDialog(): void {
    const dialogRef = this.dialog.open(InquiryConfirmationComponent, {
      panelClass: ["inquiry-confirmation-configuration", "dialog-no-padding"]
    });
  }
}
