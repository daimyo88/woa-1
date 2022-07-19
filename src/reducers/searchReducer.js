import { actions } from '../actions/searchActions';

export const initialSearchState = {
    searchQuery: '',
    page: 1,
    sort: '&sort=desc&order_by=score',
    selectedGenres: [],
    type: '',
    rating: '',
    status: '',
    startDate: null,
    endDate: null,
    sfw: false
  }

export function searchReducer(state, action) {
    if(action.type === actions.updateSearchQuery) {
        return {
            ...state,
            searchQuery: action.val,
            page: 1
        }
    }

    if(action.type === actions.updateSort) {
        return {
            ...state,
            sort: action.val,
            page: 1
        }
    }

    if(action.type === actions.updateFilter) {
        return {
            ...state,
            [action.filter]: action.val,
            page: 1
        }
    }

    if(action.type === actions.updatePage) {
        return {
            ...state,
            page: action.val
        }
    }

    if(action.type === actions.resetFilters) {
        const { selectedGenres, type, rating, status, startDate, endDate, sfw } = state;
        if(selectedGenres.length || type || rating || status || startDate || endDate || sfw) {
            return {
                ...initialSearchState,
                searchQuery: state.searchQuery,
                sort: state.sort
            }
        }
    }

    if(action.type === actions.updateSelectedGenres) {
        const currentGenres = [...state.selectedGenres];
        const genreId = action.val;
        const existingGenreIndex = currentGenres.indexOf(genreId);
        if(existingGenreIndex !== -1) {
            currentGenres.splice(existingGenreIndex, 1);
        } else {
            currentGenres.push(genreId);
        }
        return {
            ...state,
            selectedGenres: currentGenres,
            page: 1
        }
    }

    return initialSearchState;
}
