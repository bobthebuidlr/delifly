import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoryOverviewComponent } from "./category-overview/category-overview.component";
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from "./gallery/gallery.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { InquiryConfirmationComponent } from './product/inquiry-confirmation/inquiry-confirmation.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path: "home", component: HomepageComponent },
  { path: "category-overview", component: CategoryOverviewComponent },
  { path: "gallery/:category", component: GalleryComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "product/:id", component: ProductComponent },
  { path: "confirm-inquiry", component: InquiryConfirmationComponent },
  { path: "contact", component: ContactComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
