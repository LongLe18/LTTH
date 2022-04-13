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
      this.getPhieuMuon();
      this.getDevice();
  }
  
  selectedItem = '';
  listPhieuMuon
  listDevices;

  name = '';
  idPhieu = '';

  getPhieuMuon() {
    this.service.getListMuon().subscribe(res => this.listPhieuMuon = res['data'])
  }

  getDevice() {
    this.service.getDevices(0).subscribe(res => this.listDevices = res['data'])
  }

  submit() {
    if (this.idPhieu == undefined) {
      this.toastrService.show('Bạn chưa chọn phiếu mượn', 'Cảnh báo', { status: 'warning' });  
      return;
    }
    if (this.name == undefined) {
      this.toastrService.show('Bạn chưa chọn thiết bị mượn', 'Cảnh báo', { status: 'warning' });  
      return;
    }

      var data = {
        "idPhieu": this.idPhieu,
        "idThietBi": this.name,
      };
      this.service.addListMuon(data)
      .subscribe(response => {
        console.log(response)
        this.toastrService.show('Mượn thiết bị thành công', 'Thành công', { status: 'success' });  
        this.dialogRef.close(true);
      },
        error => this.toastrService.show('Mượn thiết bị không thành công: bạn đã mượn thiết bị này', 'Lỗi', { status: 'danger' })
      )   
  }

  ngOnDestroy(): void {
    
  }
}
