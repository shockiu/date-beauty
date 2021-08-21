import moment from 'moment';

class ValidateDate {
    currentDay = moment().date();
    currentMonth = moment().month();
    currentYear  = moment().year();
    unixTime = moment().unix();
    dateToValidate;

    constructor(dateToValidate) {
        this.dateToValidate =  moment(dateToValidate, 'DD/MM/YYYY');
    }

    calculateDatesBetweenToDates() {
        let days = this.daysBetweenToDates();
        let months = this.monthBetweenToDates();
        let years = this.yearsBetweenToDates();
        if ( days < 0 || months < 0 || years < 0 ) {
            return { days, months, years, validate: false };
        } else if ( isNaN(days) || isNaN(months) || isNaN(years) ) {
            return { days, months, years, validate: false };
        }
        return { days, months, years, validate: true };
    }

    
    yearsBetweenToDates() {
        return Math.round(this.currentYear - this.dateToValidate.year());
    }

    monthBetweenToDates() {
        let months = (this.currentYear - this.dateToValidate.year()) * 12;
        months = months - this.dateToValidate.month();
        months = months + this.currentMonth;
        return Math.round(months);
    }

    daysBetweenToDates() {
        let days = (this.unixTime - this.dateToValidate.unix()) / ( 3600 * 24 );
        return Math.round(days);
    }

}


const test1 = new ValidateDate('17/08/2001');
console.log( test1.calculateDatesBetweenToDates() );

/*
class ValidateDate {
    public currentDay = moment().date();
    public currentMonth = moment().month();
    public currentYear  = moment().year();
    public unixTime = moment().unix();
    public dateToValidate;

    constructor(dateToValidate: string) {
        this.dateToValidate =  moment(dateToValidate, 'DD/MM/YYYY');
    }

    calculateDatesBetweenToDates() {
        let days = this.daysBetweenToDates();
        let months = this.monthBetweenToDates();
        let years = this.yearsBetweenToDates();
        if ( days < 0 || months < 0 || years < 0 ) {
            return { days, months, years, validate: false };
        } else if ( isNaN(days) || isNaN(months) || isNaN(years) ) {
            return { days, months, years, validate: false };
        }
        return { days, months, years, validate: true };
    }

    
    yearsBetweenToDates() {
        return Math.round(this.currentYear - this.dateToValidate.year());
    }

    monthBetweenToDates() {
        let months = (this.currentYear - this.dateToValidate.year()) * 12;
        months = months - this.dateToValidate.month();
        months = months + this.currentMonth;
        return Math.round(months);
    }

    daysBetweenToDates() {
        let days = (this.unixTime - this.dateToValidate.unix()) / ( 3600 * 24 );
        return Math.round(days);
    }

}
*/