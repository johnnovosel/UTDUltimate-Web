import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-slide-show",
  templateUrl: "./slide-show.component.html",
  styleUrls: ["./slide-show.component.css"],
})
export class SlideShowComponent implements OnInit {
  selectedContent: number = 0;
  deselectedContent: number = 0;

  @Input() contentSections: Array<{
    key: number;
    title: string;
    roster: Array<any>;
  }>;

  constructor() {}

  ngOnInit(): void {}

  toggleActive(previouslyActive: number, currentlyActive: number) {
    console.log(currentlyActive, previouslyActive);
    this.selectedContent = currentlyActive;
    this.deselectedContent = previouslyActive;
    console.log(this.selectedContent, this.deselectedContent);
  }
}