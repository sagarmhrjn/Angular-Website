import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// 1st import RouterModule
import { RouterModule, Routes } from "@angular/router";

// 2nd import component
import { IntroComponent } from "./intro/intro.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ContentComponent } from "./content/content.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { ClientsComponent } from "./clients/clients.component";
import { PricingComponent } from "./pricing/pricing.component";
import { HeaderComponent } from "./header/header.component";

// 3rd Add Routes:  2 properties path, component
const routes: Routes = [
  { path: "", redirectTo: "/Home", pathMatch: "full" },
  { path: "Home", component: HeaderComponent },
  { path: "About", component: IntroComponent },
  { path: "Gallery", component: GalleryComponent },
  { path: "Services", component: ContentComponent },
  { path: "Testimonial", component: TestimonialComponent },
  { path: "Clients", component: ClientsComponent },
  { path: "Pricing", component: PricingComponent }
];

@NgModule({
  // 4th: initialize the router and start it listening for browser location changes
  imports: [CommonModule, RouterModule.forRoot(routes)], // forRoot() because we configure the router at the application's root level
  declarations: [],
  exports: [RouterModule] // makes router directives available for use in the AppModule components that will need them.
})
export class AppRoutingModule {}