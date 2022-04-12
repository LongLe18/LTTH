import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NbToastrService } from '@nebular/theme';
import { DeviceData } from '../../../@core/data/device';

const ELEMENT_DATA = [{'TenTB': 'Máy chủ 1', 'TenLoaiTB': 'Máy chủ', 'HanTra': '2022-04-08', 'idPhieuMuon': 1}];
const ELEMENT_DATA2 = [{'TenTB': 'Máy chủ 1', 'TenLoaiTB': 'Máy chủ', 'HanTra': '2022-04-08', 'idPhieuMuon': 1}];

@Component({
  selector: 'ngx-table3',
  styleUrls: ['./table3.component.scss'],
  templateUrl: './table3.component.html',
})
export class Table3Component implements OnDestroy {
  
    constructor(private toastrService: NbToastrService, private service: DeviceData) {
        this.getData();
        this.getData2();
    }

    public show: Boolean = true;
    displayedColumns: string[] = ['seqNo', 'name', 'type', 'date', 'number'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    dataSource2 = new MatTableDataSource(ELEMENT_DATA2);

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

    pageEvents(event: any) {
        this.pageNo = event.pageIndex;
        this.pageSize = event.pageSize;
    
        // this.service.getBlackList(this.pageNo + 1, this.pageSize)
        //   .subscribe((response: any) => {
        //     if (response['status'] == true && response['code'] == 200) {
        //       this.toastrService.show('Lấy dữ liệu CNC thành công', 'Thành công', { status: 'success' });
        //       if (response['data']['items'].length > 0) {
        //         this.dataSource = new MatTableDataSource(response['data']['items']);
        //       }
        //     } else {
        //       this.toastrService.show('Lấy dữ liệu CNC không thành công', 'Lỗi', { status: 'danger' });
        //     }
        //   },
        //     error => this.toastrService.show('Lấy dữ liệu CNC không thành công', 'Lỗi', { status: 'danger' })
        // )
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
          error => this.toastrService.show(`Lấy danh sách thiết bị không thành công: ${error}`, 'Lỗi', { status: 'danger' })
        )
  }

    getData() {
        this.service.getDevicesDate()
          .subscribe((response: any) => {
            if (response['data'].length > 0) {
                this.dataSource = new MatTableDataSource(response['data']);
            }
            this.dataSource.paginator = this.paginator;
            this.toastrService.show('Lấy danh sách thiết bị thành công', 'Thành công', { status: 'success' })
          },
            error => this.toastrService.show(`Lấy danh sách thiết bị không thành công: ${error}`, 'Lỗi', { status: 'danger' })
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
    ngOnDestroy(): void {
        
    }
}
