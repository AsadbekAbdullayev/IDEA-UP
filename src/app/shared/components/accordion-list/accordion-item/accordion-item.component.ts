import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { accordionItems } from '../../../models/mock_data/accordion_items';
@Component({
  selector: 'app-accordion-item',
  imports: [MatIconModule, MatButtonModule, CommonModule],
  templateUrl: 'accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css'],
})
export class AccordionItemComponent {
  accordionItems: any[];
  constructor() {
    this.accordionItems = accordionItems;
  }

  @Input() id: number = 0;
  @Input() author: string = '';
  @Input() label: string = '';
  @Input() description: string = '';
  @Input() isOpen: boolean = false;
  @Input() isLiked: boolean = false;
  @Input() isNotLiked: boolean = false;
  @Input() isSaved: boolean = false;

  toggleAccordion(id: number): void {
    const item = this.accordionItems.find((item) => item.id === id);
    if (item) {
      item.isOpen = !item.isOpen;
    }
  }

  toggleIsSaved(id: number): void {
    const item = this.accordionItems.find((item) => item.id === id);
    if (item) {
      item.isSaved = !item.isSaved;
    }
  }

  toggleIsLiked(id: number): void {
    const item = this.accordionItems.find((item) => item.id === id);
    if (item) {
      item.isNotLiked = false;
      item.isLiked = !item.isLiked;
    }
  }
  toggleIsNotLiked(id: number): void {
    const item = this.accordionItems.find((item) => item.id === id);
    if (item) {
      item.isLiked = false;
      item.isNotLiked = !item.isNotLiked;
    }
  }
}
