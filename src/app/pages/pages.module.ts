import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DeviceModule } from './device/device.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ExperimentModule } from './experiment/experiment.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    DeviceModule,
    MiscellaneousModule,
    ExperimentModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
