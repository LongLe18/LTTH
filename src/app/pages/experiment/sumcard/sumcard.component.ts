import { Component, OnDestroy, Input } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { DeviceData } from '../../../@core/data/device';

@Component({
  selector: 'ngx-sum-card',
  styleUrls: ['./sumcard.component.scss'],
  templateUrl: './sumcard.component.html',
})
export class SumCardComponent implements OnDestroy {
  
  constructor(private toastrService: NbToastrService,
    private service: DeviceData,) {
      this.getData();
  }

  @Input() on = true;
  listLength = 0;

  getData() {
    this.service.getExperiment(0)
      .subscribe((response: any) => {
          this.listLength = response['data'].length;
      },
        error => this.toastrService.show('Lấy dữ liệu không thành công', 'Lỗi', { status: 'danger' })
      )
  }

  ngOnDestroy(): void {
    
  }
}
