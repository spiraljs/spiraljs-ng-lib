export enum SpiralTense {
  Past = -1,
  Present = 0,
  Future = 1,
  UnKnown = 2
}

export class SpiralDate {
  // Properties - Start
  Value: Date = null;
  YYYYMMDD: string = "";
  MonthIndex: number = 0;
  MonthNumber: number = 0;
  Year: number = 0;
  // Properties - End

  // Constructors - Start
  constructor(dateValue?: Date) {
    if (dateValue == null) {
      dateValue = new Date();
    }

    this.Value = dateValue;
    var monthNumber = dateValue.getMonth() + 1;
    var dateYYYYMMDD = dateValue.getFullYear() + "-" + monthNumber + "-" + dateValue.getDate();
    this.YYYYMMDD = dateYYYYMMDD;
    this.MonthIndex = dateValue.getMonth();
    this.MonthNumber = dateValue.getMonth() + 1;
    this.Year = dateValue.getFullYear();
  }

  public static fromToday(): SpiralDate {
    var spiralDate: SpiralDate = null;

    try {
      var dateValue = new Date();
      spiralDate = SpiralDate.fromDate(dateValue);

    } catch (error) {
      console.log(error);
    }

    return spiralDate;
  };

  public static fromString(dateStr: string): SpiralDate {
    var spiralDate: SpiralDate = null;

    try {
      var tpos = dateStr.indexOf("T");

      if (tpos < 0) {
        dateStr = dateStr + " PST";
      }

      var dateValue = new Date(dateStr);
      spiralDate = SpiralDate.fromDate(dateValue);

    } catch (error) {
      console.log(error);
    }

    return spiralDate;
  };

  public static fromSeconds(seconds: number): SpiralDate {
    return SpiralDate.fromMilliSeconds(seconds * 1000);
  }

  public static fromMilliSeconds(milliSeconds: number): SpiralDate {
    var SpiralDate = null;
    try {
      SpiralDate = SpiralDate.fromDate(new Date(milliSeconds));
    } catch (error) {
      console.log(error);
    }
    return SpiralDate;
  }

  public static fromYMIndexD(year: number, month: number, day: number): SpiralDate {
    var SpiralDate = null;
    try {
      SpiralDate = SpiralDate.fromDate(new Date(year, month, day));
    } catch (error) {
      console.log(error);
    }
    return SpiralDate;
  }

  public static fromDate(dateValue: Date): SpiralDate {
    var spiralDate: SpiralDate = null;

    try {
      spiralDate = new SpiralDate(dateValue);
    } catch (error) {
      console.log(error);
    }

    return spiralDate;
  }
  // Constructors - End

  isEquals(SpiralDateToCompare: SpiralDate): boolean {
    return this.Value.getTime() === SpiralDateToCompare.Value.getTime();
  }

  getTense() {
    var now = new SpiralDate();
    return now.compare(this);
  }

  compare(dateToCompare: SpiralDate): SpiralTense {
    if (dateToCompare) {
      if (dateToCompare.Value > this.Value) {
        return SpiralTense.Future;
      } else if (dateToCompare.Value < this.Value) {
        return SpiralTense.Past;
      } else {
        return SpiralTense.Present;
      }
    } else {
      return SpiralTense.UnKnown;
    }
  }

  isToday(): boolean {
    var today = new SpiralDate();
    return this.isEquals(today);
  }

  isCurrentMonth(): boolean {
    var today = new Date();
    return (this.Year == today.getFullYear() && this.MonthIndex == today.getMonth());
  }

  /*
  isNotEquals(date1, date2){
    return date1.getTime() !== date2.getTime();
  }
  */

  moveToNextDate(): SpiralDate {
    var newDate = new Date(this.Value);
    newDate.setDate(newDate.getDate() + 1);
    return SpiralDate.fromDate(newDate);
  }

  moveToNextWeek(): SpiralDate {
    var newDate = new Date(this.Value);
    newDate.setDate(newDate.getDate() + 7);
    return SpiralDate.fromDate(newDate);
  }

  moveToNextMonth(): SpiralDate {
    var nextMonthDate = new Date(this.Value);
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
    return SpiralDate.fromDate(nextMonthDate);
  }

  moveToPreviousDate(): SpiralDate {
    var newDate = new Date(this.Value);
    newDate.setDate(newDate.getDate() - 1);
    return SpiralDate.fromDate(newDate);
  }

  moveToPreviousWeek(): SpiralDate {
    var newDate = new Date(this.Value);
    newDate.setDate(newDate.getDate() - 7);
    return SpiralDate.fromDate(newDate);
  }

  getNextDate(): SpiralDate {
    var newSpiralDate = SpiralDate.fromDate(this.Value);
    newSpiralDate.moveToNextDate();
    return newSpiralDate;
  }

  getPreviousDate(): SpiralDate {
    var newSpiralDate = SpiralDate.fromDate(this.Value);
    newSpiralDate.moveToPreviousDate();
    //newDate.setDate(newDate.getDate() - 1);
    return newSpiralDate;
  }

  toYYYYMMDD() {
    //console.log(this.Value);
    if (this.Value != null) {
      return this.Value.toISOString().slice(0, 10);
    } else {
      return "";
    }
  }

  toString() {
    //console.log(this.Value);
    if (this.Value != null) {
      return this.Value.toISOString().slice(0, 10);
    } else {
      return "";
    }
  }

  toLocaleString(): string {
    if (this.Value != null) {
      return this.Value.toLocaleDateString();
    } else {
      return "";
    }
  }
}