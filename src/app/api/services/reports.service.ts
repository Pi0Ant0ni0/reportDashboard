import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReportDetails, ReportListItem} from "../model/reports.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private readonly _httpService: HttpClient) { }


  public listReports = (startDate:string,endDate:String,type:string) :Observable<ReportListItem[]> =>{
    let url = `${environment.basePath}/api/v1/reports?startDate=${startDate.toString()}&endDate=${endDate.toString()}&type=${type}`
    return this._httpService.get<ReportListItem[]>(url);
  }

  public reportDetails = (reportId:string, type:string) :Observable<ReportDetails> =>{
    let url = `${environment.basePath}/api/v1/reports/${reportId}?type=${type}`
    return this._httpService.get<ReportDetails>(url);
  }
}
