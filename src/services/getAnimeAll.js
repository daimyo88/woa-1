import axios from "axios";
import format from 'date-fns/format';
import startOfYear from 'date-fns/startOfYear';
import endOfYear from 'date-fns/endOfYear';

export default async function getAnimeALL({searchQuery, page, sort, genres, type, rating, status, startDate, endDate}) {
    try {
        let startDateFormated = '';
        let endDateFormated = '';
        if(startDate) {
            startDateFormated = startOfYear(new Date(startDate));
            startDateFormated = format(startDateFormated, 'yyyy-MM-dd');
            startDateFormated = `&start_date=${startDateFormated}`;
        }
        if(endDate) {
            endDateFormated = endOfYear(new Date(endDate));
            endDateFormated = format(endDateFormated, 'yyyy-MM-dd');
            endDateFormated = `&end_date=${endDateFormated}`;
        }
        
        const animeList = await axios
            .get(`${process.env.REACT_APP_API_URL}/anime?limit=24&q=${searchQuery}&page=${page}&genres=${genres}&type=${type}&rating=${rating}&status=${status}${startDateFormated}${endDateFormated}${sort}`);
        return animeList;
    } catch(e) {
        console.log(e)
    }
}