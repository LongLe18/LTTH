import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
  NbInputModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule }  from '@angular/material/input';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { ThemeModule } from '../../@theme/theme.module';
import { DeviceComponent } from './device.component';
import { TableComponent } from './table/table.component';
import { SumCardComponent } from './sumcard/sumcard.component';
import { AddComponent } from './addmodal/add.component';
import { EditComponent } from './editmodal/edit.component';

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
    MatDialogModule,
    MatButtonModule,
    NbInputModule,
    FormsModule,
  ],
  declarations: [
    DeviceComponent,
    TableComponent,
    SumCardComponent,
    AddComponent,
    EditComponent,
  ],
  providers: [
  ],
})
export class DeviceModule { }
