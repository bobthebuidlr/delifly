import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CategoryOverviewComponent } from "./category-overview/category-overview.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "home", component: HomepageComponent },
  { path: "category-overview", component: CategoryOverviewComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
