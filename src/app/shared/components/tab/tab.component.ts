import { Component, input, output } from '@angular/core';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { ITabData } from '../../models/frontend/tab';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tab',
  templateUrl: 'tab.component.html',
  imports: [MatTabsModule, MatButtonModule, MatIconModule],
})
export class TabComponent {
  tabs = input<ITabData[]>([]);
  tabChange = output<ITabData>();

  onTabChange(tab: MatTabChangeEvent): void {
    const selectedTab = this.tabs()[tab.index];
    this.tabChange.emit(selectedTab);
  }
}
