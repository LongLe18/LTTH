import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NbToastrService } from '@nebular/theme';
import { DeviceData } from '../../../@core/data/device';
import { AddComponent } from '../addmodal/add.component';
import { EditComponent } from '../editmodal/edit.component';

const ELEMENT_DATA = [{'tenMonHoc': 'Lập trình tích hợp','tenBaiTN': 'Máy chủ 1', 'tenGV': 'Máy chủ'}];

@Component({
  selector: 'ngx-table',
  styleUrls: ['./table.component.scss'],
  templateUrl: './table.component.html',
})
export class TableComponent implements OnDestroy {
  
    constructor(private toastrService: NbToastrService, private service: DeviceData,
      private dialog: MatDialog) {
        this.getData();
    }

    public show: Boolean = true;
    displayedColumns: string[] = ['seqNo', 'subject', 'name', 'namegv', 'actions'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    pageNo = 0;
    pageSize = 20;
    listLength; 

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    openModalAddRule() {
      const dialogRef = this.dialog.open(AddComponent);
      dialogRef.afterClosed().subscribe(result => {
        if (result == true) this.getData();
      });
    }

    openModalEdit(id) {
      const dialogRef = this.dialog.open(EditComponent, { data: { id: id } });
      dialogRef.afterClosed().subscribe(result => {
        if (result == true) {
          this.getData();
        }
      });
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

    onDelete(id) {
      if (window.confirm("Bạn có chắc chắn muốn bài thí nghiệm này không?")) {
        this.service.deleteDK(id)
        .subscribe(response => {
          console.log('Deleted');
          this.toastrService.show('Xóa thành công', 'Thành công', { status: 'success' });  
          this.getData();        
        },
          error => this.toastrService.show('Xóa không thành công', 'Lỗi', { status: 'danger' })
        )   
      } else {
        console.log('Canceled');
      }
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }


    ngOnDestroy(): void {
        
    }
}
