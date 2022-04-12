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

    getClasses(): Observable<any> {
        let url = this.BASE_URL + '/laytenlop';
        return this.http.get(url).catch(this.errorHandler);
    }

    getTeachers(): Observable<any> {
        let url = this.BASE_URL + '/laytengiaovien';
        return this.http.get(url).catch(this.errorHandler);
    }

    getTypeDevice(): Observable<any> {
        let url = this.BASE_URL + '/laytenltb';
        return this.http.get(url).catch(this.errorHandler);
    }

    getDevices(id): Observable<any> {
        let url = this.BASE_URL + '/chungloai?_id=' + id;
        return this.http.get(url).catch(this.errorHandler);
    }

    EditDevice(data: any): Observable<any> {
        let url = this.BASE_URL + '/chungloai';
        const headers = { 'content-type': 'application/json'}  
        const body = JSON.stringify(data);
        return this.http.put(url, body, {'headers':headers}).catch(this.errorHandler);
    }

    EditDangKy(data: any): Observable<any> {
        let url = this.BASE_URL + '/dangky';
        const headers = { 'content-type': 'application/json'}  
        const body = JSON.stringify(data);
        return this.http.put(url, body, {'headers':headers}).catch(this.errorHandler);
    }
    
    getDevicesDate(): Observable<any> {
        let url = this.BASE_URL + '/muon_toihan?n=5';
        return this.http.get(url).catch(this.errorHandler);
    }

    getDevicesOverDate(): Observable<any> {
        let url = this.BASE_URL + '/quahan';
        return this.http.get(url).catch(this.errorHandler);
    }

    getExperiment(id): Observable<any> {
        let url = this.BASE_URL + '/nd_btn?_id=' + id;
        return this.http.get(url).catch(this.errorHandler);
    }

    addDevice(data: any): Observable<any> {
        let url = this.BASE_URL + '/addTB';
        const headers = { 'content-type': 'application/json'}  
        const body = JSON.stringify(data);
        return this.http.post(url, body, {'headers':headers}).catch(this.errorHandler);
    }

    addDK(data: any): Observable<any> {
        let url = this.BASE_URL + '/addDK';
        const headers = { 'content-type': 'application/json'}  
        const body = JSON.stringify(data);
        return this.http.post(url, body, {'headers':headers}).catch(this.errorHandler);
    }

    deleteDK(id: any): Observable<any> {
        let url = this.BASE_URL + '/deleteDK?id=' + id;
        return this.http.delete(url).catch(this.errorHandler);
    }


}