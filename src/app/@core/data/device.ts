import { Observable } from "rxjs";


export abstract class DeviceData {
    abstract getClasses(): Observable<any>;
    
    abstract getTeachers(): Observable<any>;

    abstract getTypeDevice(): Observable<any>;

    abstract getDevices(id): Observable<any>;

    abstract EditDevice(data): Observable<any>;
    
    abstract EditDangKy(data): Observable<any>;
    
    abstract getDevicesDate(): Observable<any>;

    abstract getDevicesOverDate(): Observable<any>;

    abstract getExperiment(id): Observable<any>;

    abstract addDevice(data): Observable<any>;

    abstract addDK(data): Observable<any>;

    abstract deleteDK(id): Observable<any>;
}
  