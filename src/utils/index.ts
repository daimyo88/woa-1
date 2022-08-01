import format from 'date-fns/format';
import endOfYear from 'date-fns/endOfYear';
import startOfYear from 'date-fns/startOfYear';

export const formatEndDate = (date: Date) => {
    let endDateString: string = '';
    if(date) {
        let endDate: Date = endOfYear(new Date(date));
        endDateString = format(endDate, 'yyyy-MM-dd');
        endDateString = `&end_date=${endDateString}`;
    }
    return endDateString;
}

export const formatStartDate = (date: Date) => {
    let startDateString: string = '';
    if(date) {
        let startDate: Date = startOfYear(new Date(date));
        startDateString = format(startDate, 'yyyy-MM-dd');
        startDateString = `&start_date=${startDate}`;
    }
    return startDateString;
}

export const formatSfwFilter = (sfw: boolean) => {
    return sfw ? '&sfw' : '';
}