import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NbToastrService } from '@nebular/theme';
import { DeviceData } from '../../../@core/data/device';

const ELEMENT_DATA = [{"idThietBi":1,"TenTB":"Máy chủ 1","TenGV":"Nguyễn Quốc Khánh","Ngay":"2022-04-08","TietBD":1,"TietKT":3}];

@Component({
  selector: 'ngx-table2',
  styleUrls: ['./table2.component.scss'],
  templateUrl: './table2.component.html',
})
export class Table2Component implements OnDestroy {
  
    constructor(private toastrService: NbToastrService, private service: DeviceData) {
    }

    public show: Boolean = true;
    displayedColumns: string[] = ['seqNo', 'namedevice', 'name', 'date', 'numberStart', 'numberEnd'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    pageNo = 0;
    pageSize = 20;
    listLength; 

    dateStart;
    dateEnd;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
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

    getData() {
      if ((this.dateStart == undefined) || (this.dateEnd == undefined) ) {
        this.toastrService.show(`Chưa chọn ngày muốn lập báo cáo`, 'Cảnh báo', { status: 'warning' })
       return;
     }
        this.service.reportDeviceByTime(this.dateStart, this.dateEnd)
          .subscribe((response: any) => {
            if (response['data'].length > 0) {
                this.dataSource = new MatTableDataSource(response['data']);
            }
            this.dataSource.paginator = this.paginator;
          },
            error => this.toastrService.show(`Báo cáo không thành công: ${error}`, 'Lỗi', { status: 'danger' })
          )
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }

    ngOnDestroy(): void {
        
    }
}
