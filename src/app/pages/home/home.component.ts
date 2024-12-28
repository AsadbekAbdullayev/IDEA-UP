import { Component, signal } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { TabComponent } from '../../shared/components/tab/tab.component';
import { ITabData } from '../../shared/models/frontend/tab';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AccordionListComponent } from '../../shared/components/accordion-list/accordion-list.component';
@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    TabComponent,
    FormsModule,
    MatButtonModule,
    AccordionListComponent,
    FooterComponent,
  ],
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
    { label: 'Madaniyat', id: 7 },
    { label: 'Fan', id: 8 },
    { label: 'Texnologiya', id: 9 },
    { label: 'Taraqqiyot', id: 10 },
    { label: 'Xavfsizlik', id: 11 },
    { label: 'San`at', id: 12 },
    { label: 'Adabiyot', id: 13 },
    { label: 'Tabiat', id: 14 },
    { label: 'Transport', id: 15 },
    { label: 'Energetika', id: 16 },
    { label: 'Infratuzilma', id: 17 },
    { label: 'Ilm-fan', id: 18 },
    { label: 'Sayyohlik', id: 19 },
    { label: 'Axborot', id: 20 },
  ]);
  activeTab = signal<string>('');
  inputText = 'test signals';

  onTabsChange(tab: ITabData): void {
    this.activeTab.set(tab.label);
  }
}
