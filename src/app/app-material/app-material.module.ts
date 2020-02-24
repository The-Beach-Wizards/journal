import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSliderModule } from "@angular/material/slider";

@NgModule({
  declarations: [],
  imports: [CommonModule, MatSliderModule],
  exports: [MatSlideToggleModule, MatSliderModule]
})
export class AppMaterialModule {}
