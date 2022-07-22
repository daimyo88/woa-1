import format from 'date-fns/format';
import endOfYear from 'date-fns/endOfYear';
import startOfYear from 'date-fns/startOfYear';

export const formatEndDate = (date) => {
    let endDateFilter = '';
    if(date) {
        endDateFilter = endOfYear(new Date(date));
        endDateFilter = format(endDateFilter, 'yyyy-MM-dd');
        endDateFilter = `&end_date=${endDateFilter}`;
    }
    return endDateFilter;
}

export const formatStartDate = (date) => {
    let startDateFilter = '';
    if(date) {
        startDateFilter = startOfYear(new Date(date));
        startDateFilter = format(startDateFilter, 'yyyy-MM-dd');
        startDateFilter = `&start_date=${startDateFilter}`;
    }
    return startDateFilter;
}

export const formatSfwFilter = (sfw) => {
    return sfw ? '&sfw' : '';
}