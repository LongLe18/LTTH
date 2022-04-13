import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule}  from '@angular/material/input';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { SumCardComponent } from './sumcard/sumcard.component';
import { SumCard2Component } from './sumcarddate/sumcard.component';
import { AddComponent } from './addmodal/add.component';

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
  ],
  declarations: [
    DashboardComponent,
    TableComponent,
    SumCardComponent,
    SumCard2Component,
    AddComponent,
  ],
})
export class DashboardModule { }
