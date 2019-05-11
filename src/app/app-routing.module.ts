import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EcoFeaturesComponent } from './eco-features/eco-features.component';
import { LinksComponent } from './links/links.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:  "", pathMatch: "full", redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "eco-features", component: EcoFeaturesComponent},
  {path: "links", component: LinksComponent },
  {path: "contact", component: ContactComponent },
  {path: "search", component: SearchComponent },
  {path: "**", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
