import {Component, Input, OnInit} from '@angular/core';
import {ReportDetails, ReportElements} from "../../../api/model/reports.model";
import {TableColumn} from "../../../api/model/table.model";
import {DataSource} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material/table";

const _judgeColumn: TableColumn[] = [
  { columnLabel: 'ID', itemProperty: 'nrg' },
  { columnLabel: 'Fase attuale', itemProperty: 'phase' },
  { columnLabel: 'Descrizione oggetto', itemProperty: 'objectDescription' },
  { columnLabel: 'Periodo trascorso rispetto alla media', itemProperty: 'elapsedPercentage' },
  { columnLabel: 'Messaggio', itemProperty: 'message' },

];

const _courtColumn: TableColumn[] = [
  { columnLabel: 'ID', itemProperty: 'section' },
  { columnLabel: 'Ritardo generato', itemProperty: 'delay' },
  { columnLabel: 'Materie che generano ritardo', itemProperty: 'objectDescriptions' },
  { columnLabel: 'Codici oggetto che generano ritardo', itemProperty: 'objectCodes' },
];

const _sectionColumn: TableColumn[] = [
  { columnLabel: 'Codice oggetto', itemProperty: 'objectCode' },
  { columnLabel: 'Descrizione codice oggetto', itemProperty: 'objectDescription' },
  { columnLabel: 'Fascicoli in ritardo', itemProperty: 'delayPercentage' },
  { columnLabel: 'Fasi che generano ritardo', itemProperty: 'criticalPhases' },
];



@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.scss']
})
export class DetailsTableComponent implements OnInit{

  @Input() reportDetails!:ReportDetails;
  @Input() reportType!:string;
  public dataSource!: DataSource<ReportElements>;
  public itemTableProperties: TableColumn[]=[];



  ngOnInit(): void {
    switch (this.reportType){
      case "judge":
        this.itemTableProperties=_judgeColumn;
        break;
      case "section":
        this.itemTableProperties=_sectionColumn;
        break;
      case "court":
        this.itemTableProperties=_courtColumn;
        break;
    }

    this.dataSource= new MatTableDataSource(this.reportDetails.reportElements);


  }

  public get columns(): string[] {
    return  this.itemTableProperties.map(c=>c.columnLabel);
  }

}
