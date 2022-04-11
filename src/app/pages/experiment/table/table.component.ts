import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NbToastrService } from '@nebular/theme';
import { DeviceData } from '../../../@core/data/device';

const ELEMENT_DATA = [{'tenBaiTN': 'Máy chủ 1', 'tenGV': 'Máy chủ'}];

@Component({
  selector: 'ngx-table',
  styleUrls: ['./table.component.scss'],
  templateUrl: './table.component.html',
})
export class TableComponent implements OnDestroy {
  
    constructor(private toastrService: NbToastrService, private service: DeviceData) {
        this.getData();
    }

    public show: Boolean = true;
    displayedColumns: string[] = ['seqNo', 'name', 'namegv', 'actions'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    pageNo = 0;
    pageSize = 20;
    listLength; 

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
        this.service.getExperiment(0)
          .subscribe((response: any) => {
            if (response['data'].length > 0) {
                this.dataSource = new MatTableDataSource(response['data']);
            }
            this.dataSource.paginator = this.paginator;
            this.toastrService.show('Lấy danh sách Bài thí nghiệm thành công', 'Thành công', { status: 'success' })
          },
            error => this.toastrService.show(`Lấy danh sách Bài thí nghiệm không thành công: ${error}`, 'Lỗi', { status: 'danger' })
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
