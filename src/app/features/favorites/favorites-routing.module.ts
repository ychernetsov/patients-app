import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FavoritesComponent } from "./favorites/favorites.component";

const routes: Routes = [
  {
    path: "",
    component: FavoritesComponent,
    data: { title: "stms.menu.favorites" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule {}
