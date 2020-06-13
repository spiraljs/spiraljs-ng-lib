import { SpiralMonth } from "../calendar/month";

export class Country {
    CountryId: string;
    CountryName: string;
    PhoneCode: string;
    CurrencyCode: string;
    CurrencySymbol: string;
    FinYearStartMonthNumber: number;
    FinYearStartMonthName: string;
    TimeZoneCode: string;
    UTCOffset: string;

    constructor(id: string, name: string, currencyCode: string, currencySymbol: string, finYearStart: number, timeZoneCode: string, utcOffset: string){
        this.CountryId = id;
        this.CountryName = name;
        this.CurrencyCode = currencyCode;
        this.CurrencySymbol = currencySymbol;
        this.FinYearStartMonthNumber = finYearStart;
        var startMonth: SpiralMonth = SpiralMonth.fromYMNumber(2018, finYearStart);
        this.FinYearStartMonthName = startMonth.MonthName;
        this.TimeZoneCode = timeZoneCode;
        this.UTCOffset = utcOffset;
    }

  toString(){
    return this.CountryName;
  }
}