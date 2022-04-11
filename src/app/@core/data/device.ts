import { Observable } from "rxjs";


export abstract class DeviceData {
    abstract getDevices(id): Observable<any>;

    abstract getDevicesDate(): Observable<any>;

    abstract getDevicesOverDate(): Observable<any>;

    abstract getExperiment(id): Observable<any>;
}
  