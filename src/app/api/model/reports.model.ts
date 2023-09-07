export class ReportListItem{
    public id:string;
    public reportDate:string;

    constructor(id: string, reportDate: string) {
        this.id = id;
        this.reportDate = reportDate;
    }
}


export class ReportDetails{
    public id:string;
    public reportDate:Date;
    public type:string;
    public court:string;
    public reportElements:ReportElements[];
    constructor(id: string, reportDate: Date, type: string, court: string, reportElements: ReportElements[]) {
        this.id = id;
        this.reportDate = reportDate;
        this.type = type;
        this.court = court;
        this.reportElements = reportElements;
    }
}

export class ReportElements{

}

export class JudgeReportElement extends ReportElements{
    public nrg:string;
    public phase:number;
    public objectDescription:string;
    public elapsedPercentage:string;
    public message:string


    constructor(nrg: string, phase: number, objectDescriptions: string, elapsedPercentage: string, message: string) {
        super();
        this.nrg = nrg;
        this.phase = phase;
        this.objectDescription = objectDescriptions;
        this.elapsedPercentage = elapsedPercentage;
        this.message = message;
    }
}

export class CourtReportElement extends ReportElements{
    public section:string;
    public delay:number;
    public objectDescriptions:string;
    public objectCodes:string;

    constructor(section: string, delay: number, objectDescriptions: string, objectCodes: string) {
        super();
        this.section = section;
        this.delay = delay;
        this.objectDescriptions = objectDescriptions;
        this.objectCodes = objectCodes;
    }
}

export class SectionReportElement extends ReportElements{
    public section:string;
    public delayPercentage:number;
    public objectDescription:string;
    public objectCode:string;
    public criticalPhases:string;

    constructor(section: string, delayPercentage: number, objectDescription: string, objectCode: string, criticalPhases: string) {
        super();
        this.section = section;
        this.delayPercentage = delayPercentage;
        this.objectDescription = objectDescription;
        this.objectCode = objectCode;
        this.criticalPhases = criticalPhases;
    }
}