import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule}  from '@angular/material/input';

import { ThemeModule } from '../../@theme/theme.module';
import { DeviceComponent } from './device.component';
import { TableComponent } from './table/table.component';
import { SumCardComponent } from './sumcard/sumcard.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [
    DeviceComponent,
    TableComponent,
    SumCardComponent,
  ],
  providers: [
  ],
})
export class DeviceModule { }
