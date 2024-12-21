import { Component, signal } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { TabComponent } from '../../shared/components/tab/tab.component';
import { ITabData } from '../../shared/models/frontend/tab';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, TabComponent, FormsModule],
  templateUrl: './home.component.html',
})
export default class HomeComponent {
  tabs = signal([
    { label: 'Ta`lim', id: 1 },
    { label: 'Iqtisod', id: 2 },
    { label: 'Qonun', id: 3 },
    { label: 'Markaz', id: 4 },
    { label: 'Respublika', id: 5 },
    { label: 'Sog`liq', id: 6 },
  ]);
  activeTab = signal<string>('');
  inputText = 'test signals';

  onTabsChange(tab: ITabData): void {
    this.activeTab.set(tab.label);
  }
}
