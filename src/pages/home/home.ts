import { Component } from '@angular/core';

import { BarChartPage } from '../bar-chart/bar-chart';
import { PieChartPage } from '../pie-chart/pie-chart';
import { LineChartPage } from '../line-chart/line-chart';

import { SuperTabsController } from 'ionic2-super-tabs';

@Component({
  templateUrl: 'home.html',
  providers: [SuperTabsController]
})
export class HomePage {

  tab1Root: any = LineChartPage;
  tab2Root: any = BarChartPage;
  tab3Root: any = PieChartPage;

  constructor(private superTabsCtrl: SuperTabsController) {

  }

  ngAfterViewInit() {

    // must wait for AfterViewInit if you want to modify the tabs instantly
    this.superTabsCtrl.setBadge('firstPage', 5);

  }

  hideToolbar() {
    this.superTabsCtrl.showToolbar(false);
  }

  showToolbar() {
    this.superTabsCtrl.showToolbar(true);
  }

  onTabSelect(ev: any) {
    console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
  }

}