import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoryOverviewComponent } from "./category-overview/category-overview.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SpecialRequestConfirmComponent } from './special-request/special-request-confirm/special-request-confirm.component';


const routes: Routes = [
  { path: "home", component: HomepageComponent },
  { path: "category-overview", component: CategoryOverviewComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "confirm-request", component: SpecialRequestConfirmComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
