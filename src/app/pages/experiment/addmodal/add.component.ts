import { Component, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NbToastrService } from '@nebular/theme';
import { DeviceData } from '../../../@core/data/device';

@Component({
  selector: 'ngx-modal-add-newsensor',
  styleUrls: ['./add.component.scss'],
  templateUrl: './add.component.html',
})
export class AddComponent implements OnDestroy {
  
  constructor(public dialogRef: MatDialogRef<AddComponent>,
              private service: DeviceData,
              private toastrService: NbToastrService) {
                this.getTeacher();
                this.getClasses();
                this.getDevices();
  }
  
  nameTeacher;
  nameExperiment;
  nameClass;
  nameDevice;
  numberStart;
  numberEnd;
  nameSubject;
  dateEnd;

  listTeacher;
  listClasses;
  listDevices;

  getTeacher() {
    this.service.getTeachers().subscribe(res => this.listTeacher = res['data'])
  }

  getClasses() {
    this.service.getClasses().subscribe(res => this.listClasses = res['data'])
  }

  getDevices() {
    this.service.getDevices(0).subscribe(res => this.listDevices = res['data'])
  }
  submit() {
    if ((this.numberStart < 1 || this.numberStart > 12) || (this.numberEnd < 1 || this.numberEnd > 12)) {
      this.toastrService.show('Số tiết vượt quá giới hạn', 'Lỗi', { status: 'danger' });  
      return;
    }
    var date = new Date();
      var data = {
        "TenGV" : this.nameTeacher,
        "TenBaiTN": this.nameExperiment,
        "Ngay": date.toISOString().split('T')[0],
        "TrangThai_PDK" : true,
        "TenLop" : this.nameClass,
        "TenTB": this.nameDevice,
        "TietBD" : this.numberStart,
        "TietKT" : this.numberEnd,
        "TenMonHoc": this.nameSubject,
        "NgayMuon" : date.toISOString().split('T')[0],
        "HanTra" : this.dateEnd,
        "TrangThai_PMT" : false
      }
      this.service.addDK(data)
      .subscribe(response => {
        console.log(response)
        this.toastrService.show('Đăng ký thành công', 'Thành công', { status: 'success' });  
        this.dialogRef.close(true);
      },
        error => this.toastrService.show('Đăng ký không thành công', 'Lỗi', { status: 'danger' })
      )   
  }

  ngOnDestroy(): void {
    
  }
}
