import { Injectable } from '@angular/core';
import { DeviceData } from '../data/device';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';

@Injectable()
export class DeviceService extends DeviceData {

    constructor(private http: HttpClient,) {
        super();
    }

    BASE_URL = environment.BASE_URL;

    errorHandler(error: HttpErrorResponse) {
        return Observable.throw(error.message || "Server error");
    }

    getDevices(id): Observable<any> {
        let url = this.BASE_URL + '/chungloai?_id' + id;
        return this.http.get(url).catch(this.errorHandler);
    }

    getDevicesDate(): Observable<any> {
        let url = this.BASE_URL + '/muon_toihan?n=5';
        return this.http.get(url).catch(this.errorHandler);
    }

    getDevicesOverDate(): Observable<any> {
        let url = this.BASE_URL + '/quahan_id';
        return this.http.get(url).catch(this.errorHandler);
    }

    getExperiment(id): Observable<any> {
        let url = this.BASE_URL + '/nd_btn?_id=' + id;
        return this.http.get(url).catch(this.errorHandler);
    }
}