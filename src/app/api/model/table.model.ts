export class TableColumn{
    public columnLabel!:string;
    public itemProperty!:string;

}


export class TableAction<T>{
    public actionIcon!: string;
    public actionDescription!: string;
    public isEnabled = (row: T): boolean => { return true };
    public action = (row: T): void => { };
}


export const MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: "DD/MM/YYYY",
        monthLabel: "mm",
        monthYearLabel: "DD",
        dateA11yLabel: "LL",
        monthYearA11yLabel: "LL",
    }
};


