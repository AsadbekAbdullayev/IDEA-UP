import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { accordionItems } from '../../models/mock_data/accordion_items';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
@Component({
  selector: 'app-accordion-list',
  templateUrl: './accordion-list.component.html',
  imports: [AccordionItemComponent, CommonModule],
})
export class AccordionListComponent {
  accordionItems: any[];
  constructor() {
    this.accordionItems = accordionItems;
  }
}
