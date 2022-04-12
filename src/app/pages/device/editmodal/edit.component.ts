import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NbToastrService } from '@nebular/theme';
import { DeviceData } from '../../../@core/data/device';

@Component({
  selector: 'ngx-modal-edit',
  styleUrls: ['./edit.component.scss'],
  templateUrl: './edit.component.html',
})
export class EditComponent {
  
  constructor( @Inject(MAT_DIALOG_DATA) public data: {id: string}, 
                private service: DeviceData,
                private toastrService: NbToastrService,
                public dialogRef: MatDialogRef<EditComponent>) {
                    this.getTypeDevice();
        this.getInfo();
  }

  name = '';
  nametype = '';
  listTypeDevice;

  getInfo() {
    this.service.getDevices(this.data.id)
        .subscribe((response: any) => {
            this.name = response['data'][0].TenTB;
            this.nametype = response['data'][0].TenLoaiTB;
        },
        error => this.toastrService.show(`Lấy danh sách thiết bị không thành công: ${error}`, 'Lỗi', { status: 'danger' })
        )
  }

  getTypeDevice() {
    this.service.getTypeDevice().subscribe(res => this.listTypeDevice = res['data'])
  }

  submit() {
    var data = {
      "idTB": this.data.id,
      "TenTB": this.name,
      "TenLoaiTB": this.nametype,
    };
    this.service.EditDevice(data)
    .subscribe(response => {
      console.log(response)
      this.toastrService.show('Sửa thông tin thiết bị thành công', 'Thành công', { status: 'success' });  
      this.dialogRef.close(true);
    },
      error => this.toastrService.show('sửa thông tin thiết bị không thành công', 'Lỗi', { status: 'danger' })
    )   
  }
}
