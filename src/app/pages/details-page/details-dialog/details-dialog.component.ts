import {Component, Inject, OnInit} from '@angular/core';
import {DialogRef} from "@angular/cdk/dialog";
import {ReportsService} from "../../../api/services/reports.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ReportDetails} from "../../../api/model/reports.model";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.scss']
})
export class DetailsDialogComponent implements OnInit{

  public reportDetails!:ReportDetails;
  public reportType!:string;


  constructor( private _dialogRef: DialogRef<DetailsDialogComponent>,
               private _reportService:ReportsService,
               @Inject(MAT_DIALOG_DATA) private _data:{id:string},
  ) {
  }

  ngOnInit(): void {
    this._reportService.reportDetails(this._data.id,environment.type).subscribe((report:ReportDetails)=>{
      this.reportDetails = report;
      this.reportType=environment.type;
    });
  }
}
