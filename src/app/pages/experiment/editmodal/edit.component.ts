import { Component, OnDestroy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NbToastrService } from '@nebular/theme';
import { DeviceData } from '../../../@core/data/device';

@Component({
  selector: 'ngx-modal-add-newsensor',
  styleUrls: ['./edit.component.scss'],
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnDestroy {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: string},
              public dialogRef: MatDialogRef<EditComponent>,
              private service: DeviceData,
              private toastrService: NbToastrService) {
                this.getTeacher();
                this.getInfo();
  }
  
  nameTeacher;
  nameExperiment;
  numberStart;
  numberEnd;
  nameSubject;
  dateEnd;

  listTeacher;

  getTeacher() {
    this.service.getTeachers().subscribe(res => this.listTeacher = res['data'])
  }

  getInfo() {
    this.service.getExperiment(this.data.id).subscribe(res => {
      this.nameTeacher = res['data'][0].tenGV;
      this.nameExperiment = res['data'][0].tenBaiTN;
      this.nameSubject = res['data'][0].tenMonHoc;
    })
  }

  submit() {
    if ((this.numberStart < 1 || this.numberStart > 12) || (this.numberEnd < 1 || this.numberEnd > 12)) {
      this.toastrService.show('Số tiết vượt quá giới hạn', 'Lỗi', { status: 'danger' });  
      return;
    }
      var data = {
        "idPhieu": this.data.id,
        "TenGV" : this.nameTeacher,
        "TenBaiTN": this.nameExperiment,
        "TietBD" : this.numberStart,
        "TietKT" : this.numberEnd,
        "TenMonHoc": this.nameSubject,
        "HanTra" : this.dateEnd,
      }
      this.service.EditDangKy(data)
      .subscribe(response => {
        console.log(response)
        this.toastrService.show('Sửa thông tin Đăng ký thành công', 'Thành công', { status: 'success' });  
        this.dialogRef.close(true);
      },
        error => this.toastrService.show('Sửa thông tin Đăng ký không thành công', 'Lỗi', { status: 'danger' })
      )   
  }

  ngOnDestroy(): void {
    
  }
}
