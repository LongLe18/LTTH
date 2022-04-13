import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NbToastrService } from '@nebular/theme';
import { DeviceData } from '../../../@core/data/device';

const ELEMENT_DATA = [{"idPhieu":1,"tenMonHoc":"Lập trình tích hợp","tenBaiTN":"Bai thi nghiem 1","tenGV":"Nguyễn Thị Hiề"}];

@Component({
  selector: 'ngx-table3',
  styleUrls: ['./table3.component.scss'],
  templateUrl: './table3.component.html',
})
export class Table3Component implements OnDestroy {
  
    constructor(private toastrService: NbToastrService, private service: DeviceData) {
      this.getTeacher();
    }

    public show: Boolean = true;
    displayedColumns: string[] = ['seqNo', 'namesubject', 'nameobject', 'namegv'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    pageNo = 0;
    pageSize = 20;
    listLength; 

    nameTeacher;
    listTeacher;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    getTeacher() {
      this.service.getTeachers().subscribe(res => this.listTeacher = res['data'])
    }

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
        this.service.getExperiment(this.nameTeacher)
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
