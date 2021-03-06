import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NbToastrService } from '@nebular/theme';
import { DeviceData } from '../../../@core/data/device';
import { AddComponent } from '../addmodal/add.component';


@Component({
  selector: 'ngx-table',
  styleUrls: ['./table.component.scss'],
  templateUrl: './table.component.html',
})
export class TableComponent implements OnDestroy {
  
    constructor(private toastrService: NbToastrService, private service: DeviceData, private dialog: MatDialog) {
        this.getData();
        this.getData2();
    }

    public show: Boolean = true;
    displayedColumns: string[] = ['seqNo', 'name', 'type', 'date', 'number', 'actions'];
    dataSource = new MatTableDataSource();
    dataSource2 = new MatTableDataSource();

    pageNo = 0;
    pageSize = 20;
    listLength; 

    pageNo2 = 0;
    pageSize2 = 20;
    listLength2; 

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatPaginator) paginator2: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource2.paginator = this.paginator2;
    }

    openModalMuonThietBi() {
      const dialogRef = this.dialog.open(AddComponent);
      dialogRef.afterClosed().subscribe(result => {
        if (result == true) {
          this.getData();
        }
      });
    }
    
    pageEvents(event: any) {
        this.pageNo = event.pageIndex;
        this.pageSize = event.pageSize;
    }

    pageEvents2(event: any) {
      this.pageNo2 = event.pageIndex;
      this.pageSize2 = event.pageSize;
    }

    getData2() {
      this.service.getDevicesOverDate()
        .subscribe((response: any) => {
          if (response['data'].length > 0) {
              this.dataSource2 = new MatTableDataSource(response['data']);
          }
          this.dataSource2.paginator = this.paginator2;
        },
          error => this.toastrService.show(`L???y danh s??ch thi???t b??? kh??ng th??nh c??ng: ${error}`, 'L???i', { status: 'danger' })
        )
  }

    getData() {
        this.service.getDevicesDate()
          .subscribe((response: any) => {
            if (response['data'].length > 0) {
                this.dataSource = new MatTableDataSource(response['data']);
            }
            this.dataSource.paginator = this.paginator;
            this.toastrService.show('L???y danh s??ch thi???t b??? th??nh c??ng', 'Th??nh c??ng', { status: 'success' })
          },
            error => this.toastrService.show(`L???y danh s??ch thi???t b??? kh??ng th??nh c??ng: ${error}`, 'L???i', { status: 'danger' })
          )
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }

    applyFilter2(filterValue: string) {
      filterValue = filterValue.trim();
      filterValue = filterValue.toLowerCase();
      this.dataSource2.filter = filterValue;
    }

    onDelete(id, idDevice) {
      console.log(idDevice);
      if (window.confirm("B???n c?? ch???c ch???n tr??? thi???t b??? n??y kh??ng?")) {
        this.service.deleteSapToiHan(id, idDevice)
        .subscribe(response => {
          console.log('Deleted');
          this.toastrService.show('Tr??? th??nh c??ng', 'Th??nh c??ng', { status: 'success' });  
          this.getData();      
          this.getData2();  
        },
          error => this.toastrService.show('Tr??? kh??ng th??nh c??ng', 'L???i', { status: 'danger' })
        )   
      } else {
        console.log('Canceled');
      }
    }

    ngOnDestroy(): void {
        
    }
}
