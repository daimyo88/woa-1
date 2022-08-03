import format from 'date-fns/format';
import endOfYear from 'date-fns/endOfYear';
import startOfYear from 'date-fns/startOfYear';

export const formatEndDate = (date: Date | null) => {
    let endDateFormat: string = '';
    if(date) {
        let endDate: Date = endOfYear(new Date(date));
        endDateFormat = format(endDate, 'yyyy-MM-dd');
        endDateFormat = `&end_date=${endDateFormat}`;
    }
    return endDateFormat;
}

export const formatStartDate = (date: Date | null) => {
    let startDateFormat: string = '';
    if(date) {
        let startDate: Date = startOfYear(new Date(date));
        startDateFormat = format(startDate, 'yyyy-MM-dd');
        startDateFormat = `&start_date=${startDateFormat}`;
    }
    return startDateFormat;
}

export const formatSfwFilter = (sfw: boolean) => {
    return sfw ? '&sfw' : '';
}