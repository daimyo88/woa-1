import axios from "axios";
import format from 'date-fns/format';
import startOfYear from 'date-fns/startOfYear';
import endOfYear from 'date-fns/endOfYear';

export default async function getAnimeALL({searchQuery, page, sort, genres, type, rating, status, startDate, endDate, sfw, errorHandler}) {
    try {
        let startDateFilter = '';
        let endDateFilter = '';
        if(startDate) {
            startDateFilter = startOfYear(new Date(startDate));
            startDateFilter = format(startDateFilter, 'yyyy-MM-dd');
            startDateFilter = `&start_date=${startDateFilter}`;
        }
        if(endDate) {
            endDateFilter = endOfYear(new Date(endDate));
            endDateFilter = format(endDateFilter, 'yyyy-MM-dd');
            endDateFilter = `&end_date=${endDateFilter}`;
        }
        let sfwFilter = sfw ? '&sfw' : '';
        const animeList = await axios
            .get(`${process.env.REACT_APP_API_URL}/anime?limit=24&q=${searchQuery}&page=${page}&genres=${genres}&type=${type}&rating=${rating}&status=${status}${sfwFilter}${startDateFilter}${endDateFilter}${sort}`);
        return animeList;
    } catch(e) {
        console.log('error')
       errorHandler(true);
    }
}