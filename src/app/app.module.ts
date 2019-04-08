import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryOverviewComponent } from './category-overview/category-overview.component';
import { CategoryComponent } from './category-overview/category/category.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryItemComponent } from './gallery/gallery-item/gallery-item.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeWidgetComponent } from './homepage/home-widget/home-widget.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { SpecialRequestDialogComponent } from './special-request/special-request-dialog/special-request-dialog.component';
import { SpecialRequestComponent } from './special-request/special-request.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { SpecialRequestConfirmComponent } from './special-request/special-request-confirm/special-request-confirm.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    HomeWidgetComponent,
    CategoryOverviewComponent,
    PageNotFoundComponent,
    CategoryComponent,
    GalleryComponent,
    GalleryItemComponent,
    SpecialRequestComponent,
    ProductComponent,
    SpecialRequestDialogComponent,
    DisclaimerComponent,
    SpecialRequestConfirmComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
    NgbModule,
    MatDialogModule,
    MatIconModule
  ],
  entryComponents: [SpecialRequestDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
