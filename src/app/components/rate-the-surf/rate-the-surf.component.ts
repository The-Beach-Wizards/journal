import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-rate-the-surf",
  templateUrl: "./rate-the-surf.component.html",
  styleUrls: ["./rate-the-surf.component.css"]
})
export class RateTheSurfComponent implements OnInit {
  personalRating: number = 0;

  constructor() {}

  ngOnInit() {}
}
