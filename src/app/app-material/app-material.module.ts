import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSliderModule, MatSlideToggleModule } from "@angular/material";

@NgModule({
  declarations: [],
  imports: [CommonModule, MatSliderModule],
  exports: [MatSlideToggleModule, MatSliderModule]
})
export class AppMaterialModule {}
