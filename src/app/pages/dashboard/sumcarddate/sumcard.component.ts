import { Component, OnDestroy, Input } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { DeviceData } from '../../../@core/data/device';

@Component({
  selector: 'ngx-sum-card2',
  styleUrls: ['./sumcard.component.scss'],
  templateUrl: './sumcard.component.html',
})
export class SumCard2Component implements OnDestroy {
  
  constructor(private toastrService: NbToastrService,
    private service: DeviceData,) {
      this.getData();
  }

  @Input() on = true;
  listLength = 0;

  getData() {
    this.service.getDevicesOverDate()
      .subscribe((response: any) => {
          this.listLength = response['data'].length;
      },
        error => this.toastrService.show('Lấy dữ liệu không thành công', 'Lỗi', { status: 'danger' })
      )
  }


  ngOnDestroy(): void {
    
  }
}
