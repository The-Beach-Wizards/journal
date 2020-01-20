import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RateTheSurfComponent } from "./components/rate-the-surf/rate-the-surf.component";

const routes: Routes = [{ path: "rate", component: RateTheSurfComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
