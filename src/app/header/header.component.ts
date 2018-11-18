import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../config.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  header = {};
  constructor(private config: ConfigService) {}

  // life-cycle hook, executed wen th components load up
  ngOnInit() {
    this.header = this.getHeader();
  }

  getHeader() {
    return this.config.getConfig().header;
  }
}
