import {Component, OnInit} from '@angular/core';
import {TableColumn} from "../../../api/model/table.model";
import {DataSource} from "@angular/cdk/collections";
import {ReportListItem} from "../../../api/model/reports.model";
import {ReportsService} from "../../../api/services/reports.service";
import {MatTableDataSource} from "@angular/material/table";
import {FormControl} from "@angular/forms";
import * as moment from 'moment';
import {MatDialog} from "@angular/material/dialog";
import {DetailsDialogComponent} from "../../details-page/details-dialog/details-dialog.component";
import {AuthService, Profile} from "../../../infrastructure/keycloak/auth.service";




const _columns: TableColumn[] = [
  { columnLabel: 'id', itemProperty: 'id' },
  { columnLabel: 'Data', itemProperty: 'reportDate' }
];

@Component({
  selector: 'app-reports-table',
  templateUrl: './reports-table.component.html',
  styleUrls: ['./reports-table.component.scss']
})
export class ReportsTableComponent implements OnInit{
  public dataSource!: DataSource<ReportListItem>;
  public itemTableProperties: TableColumn[] = _columns;
  public startDateController!: FormControl ;
  public endDateController!: FormControl ;
  public loggedUser!: Profile;


  constructor(
      private _reportsService: ReportsService,
      private _dialog: MatDialog,
      private _authService: AuthService
  ) {

  }

  public get columns(): string[] {
      return  [...this.itemTableProperties.map(c=>c.columnLabel),"Azioni"];
  }

  ngOnInit(): void {
    this.startDateController= new FormControl<any>(null);
    this.endDateController= new FormControl<any>(null);

    this.loggedUser = this._authService.getLoggedUser()!;
    if(this.loggedUser){
      this.endDateController.valueChanges.subscribe((endDate:Date)=>{
        let startDate:Date = this.startDateController.value;
        this._fetchData(startDate,endDate);
      });
      this._setDefaultTemporalRange();
    }

  }

  private _fetchData(startDate: Date, endDate: Date) {
    let startDateString = (moment(startDate)).format('YYYY-MM-DD')
    let endDateString = (moment(endDate)).format('YYYY-MM-DD')

    this._reportsService.listReports(startDateString,endDateString,this.loggedUser.role).subscribe((reports: ReportListItem[]) => {
      reports = reports.map(r=>new ReportListItem(r.id,moment(r.reportDate,'YYYY-MM-DD').format('DD/MM/YYYY')))
      this.dataSource = new MatTableDataSource(reports);
    });
  }

  logout() {
    this._authService.logout();
  }


  get role():string{
      switch (this.loggedUser.role){
        case"judge":
              return "Giudice";
        case "section":
          return "Presidente di sezione";
        case "court":
          return "Presidente di Tribunale";
        default:
          return "";
      }
  }

  public viewDetails(row: ReportListItem) {
    this._dialog.open(DetailsDialogComponent,{
      data:{
        id: row.id
      }
    })
  }

  private _setDefaultTemporalRange() {
    let startDate =  moment().subtract(30, 'days'); // or...
    let endDate =moment();
    this.startDateController.patchValue(startDate.toDate());
    this.endDateController.patchValue(endDate.toDate());

  }
}
