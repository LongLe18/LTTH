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
      this.getTypeDevice();
  }
  
  selectedItem = '';
  listTypeDevice;

  name = '';
  typename = '';

  getTypeDevice() {
    this.service.getTypeDevice().subscribe(res => this.listTypeDevice = res['data'])
  }

  submit() {
      var data = {
        "TenTB": this.name,
        "TenLoaiTB": this.typename,
      };
      this.service.addDevice(data)
      .subscribe(response => {
        console.log(response)
        this.toastrService.show('Thêm thiết bị thành công', 'Thành công', { status: 'success' });  
        this.dialogRef.close(true);
      },
        error => this.toastrService.show('Thêm thiết bị không thành công', 'Lỗi', { status: 'danger' })
      )   
  }

  ngOnDestroy(): void {
    
  }
}
