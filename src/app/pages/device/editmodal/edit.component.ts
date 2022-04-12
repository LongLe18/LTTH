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
  }
}
