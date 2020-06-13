import { SpiralDate } from './date';

export class SpiralMonth {
  // Properties - Start
  public static monthNamesArray: any = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
  ];

  /*
  prepareMonthNamesArray(){
      var month = new Array();
      month[0] = "January";
      month[1] = "February";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "August";
      month[8] = "September";
      month[9] = "October";
      month[10] = "November";
      month[11] = "December";
      this.globals.monthNamesArray = month; 
  }*/

  MonthIndex: number = 0;
  MonthNumber: number = 0;
  Year: number = 0;
  YearShort: number = 0;
  MonthName: string = "";
  MonthAndYear: string = "";
  // Properties - End

  // Constructors - Start
  constructor(){
    //
  }

  toString(){
    return this.MonthName;
  }

  public static fromDate(dateValue: Date): SpiralMonth {
    return SpiralMonth.fromYMIndex(dateValue.getFullYear(), dateValue.getMonth())
  }

  public static fromYMNumber(fullYear: number, monthNumber: number): SpiralMonth {
    return SpiralMonth.fromYMIndex(fullYear, (monthNumber - 1));
  }

  public static fromYMIndex(fullYear: number, monthIndex: number): SpiralMonth {
    var newMonth: SpiralMonth = null;
    try {
      newMonth = new SpiralMonth();
      newMonth.MonthIndex = monthIndex;
      newMonth.MonthNumber = monthIndex + 1;
      newMonth.MonthName = SpiralMonth.monthNamesArray[monthIndex];
      newMonth.MonthAndYear = SpiralMonth.monthNamesArray[monthIndex] + ", " + fullYear;
      newMonth.Year = fullYear;
    } catch (error) {
      console.log(error);
    }
    return newMonth;
  }    
  // Constructors - End

  public static getMonthsList(): string[] {
    return SpiralMonth.monthNamesArray;
  }

  getFirstDate(): SpiralDate {
    var firstDate: SpiralDate = SpiralDate.fromYMIndexD(this.Year, this.MonthIndex, 1);
    return firstDate;    
  }

  getLastDate(): SpiralDate {
    //var lastDate: SpiralDate = new SpiralDate();
    var year = this.Year;
    var monthIdx = this.MonthIndex + 1;
    if(monthIdx>11){
      monthIdx = 0;
      year +=  1;
    }
    return SpiralDate.fromYMIndexD(year, monthIdx, 0);
    //return lastDate;
  }

  isCurrentMonth(): boolean{
    var today = new Date();
    return (this.Year==today.getFullYear() && this.MonthIndex==today.getMonth());
  }
  
  isEquals(monthToCompare: SpiralMonth): boolean {
    return (monthToCompare.Year==this.Year && monthToCompare.MonthNumber==this.MonthNumber);
  }
}
