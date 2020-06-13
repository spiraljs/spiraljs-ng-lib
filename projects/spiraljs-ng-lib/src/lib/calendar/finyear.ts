import { SpiralDate } from './date';
import { SpiralMonth } from './month';

export class SpiralFinYear {
    Id: number = 0;
    IdYear: number = 0;
    IdMonth: number = 0;
    Name: string = null;
    StartDate: SpiralDate = null;
    EndDate: SpiralDate = null;
    Months: SpiralMonth[] = [];
    FirstMonth: SpiralMonth = null;
    LastMonth: SpiralMonth = null; 
    DefaultMonth: SpiralMonth = null;
    IsEnded: boolean = false;

    constructor(startDateStr: string | Date, needFullYear: boolean){
        this.prepareFinYear(startDateStr, needFullYear);
    }

    toString() {
        return this.Name;
    }

    prepareFinYear(startDateStr: string | Date, needFullYear: boolean){
        try {
            if(typeof startDateStr === "string"){
                this.StartDate = SpiralDate.fromString(startDateStr);
            }else{
                this.StartDate = SpiralDate.fromDate(startDateStr);
            }
            //var today = new Date();
            var i;
            var monthIndex = this.StartDate.MonthIndex;
            var currYear = this.StartDate.Year;
            // First year considered as Id
            this.Id = currYear;
            //console.log(this.StartDate);
            //console.log(this.Id);

            for(i=0;i<=11;i++){
                var eachMonth: SpiralMonth = SpiralMonth.fromYMIndex(currYear, monthIndex);
                //var isCurrMonth = eachMonth.isCurrentMonth();   // finYearStartDate.isCurrentMonth();  // (currYear==today.getFullYear() && monthIndex==today.getMonth());
                this.Months.push(eachMonth);
                monthIndex++;
                if(monthIndex>11){
                currYear++;
                monthIndex = 0;
                }
                if(!needFullYear && eachMonth.isCurrentMonth()){
                    // Fills till current month only
                    break;
                }
            }

            this.FirstMonth = this.Months[0];
            this.IdYear = this.FirstMonth.Year;
            this.IdMonth = this.FirstMonth.MonthNumber;
            this.LastMonth = this.Months[this.Months.length-1];
            this.EndDate = this.LastMonth.getLastDate();
            this.Name = this.StartDate.toLocaleString() + " - " + this.EndDate.toLocaleString();

            // Finding default Month to show on Dropdowns
            // Taking current month as default if this FinYear is current year
            this.DefaultMonth = this.Months.find(element => {
                return element.isCurrentMonth();
            });
            // If FinYear is past, then last month on that year is default
            if(this.DefaultMonth==null){
                this.DefaultMonth = this.LastMonth;
                this.IsEnded = true;
            }
            
        } catch (error) {
            console.log(error);
            //monthArray = [];
        }
    }

    getPreviousMonth(currMonth: SpiralMonth){
        var prevMonth: SpiralMonth = null;
        try {
            if(this.Months != null && this.Months.length > 0){
                var currMonthPos = -1;
                for(var i=0;i<this.Months.length;i++){
                    if(this.Months[i].isEquals(currMonth)){
                        currMonthPos = i;
                    }
                }
                if(currMonthPos>0){
                    prevMonth = this.Months[currMonthPos - 1];
                }
            }
        } catch (error) {
            console.log(error);
        }
        return prevMonth;
    }

    getNextMonth(currMonth: SpiralMonth){
        var nextMonth: SpiralMonth = null;
        try {
            if(this.Months != null && this.Months.length > 0){
                var currMonthPos = -1;
                for(var i=0;i<this.Months.length;i++){
                    if(this.Months[i].isEquals(currMonth)){
                        currMonthPos = i;
                    }
                }
                if(currMonthPos >= 0 && currMonthPos < (this.Months.length-1)){
                    nextMonth = this.Months[currMonthPos + 1];
                }
            }
        } catch (error) {
            console.log(error);
        }
        return nextMonth;
    }
}
