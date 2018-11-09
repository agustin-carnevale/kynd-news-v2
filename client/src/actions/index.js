import { FETCH_ARTICLE, FETCH_TITLES} from './types';

export const fetchTitles  = () => async dispatch => {
    const api = 'http://localhost:5000/api/news/titles';
    try {
        const res = await fetch(api);
        const titles = await res.json();
        dispatch({
            type:FETCH_TITLES,
            payload: titles
        });
    } catch (error) {
        console.log("An error occurred loading news..");
    }
};

export const fetchArticle  = (id) => async dispatch => {
    const api = `http://localhost:5000/api/news/article/${id}`;
    try {
        const res = await fetch(api);
        const article = await res.json();
        dispatch({
            type:FETCH_ARTICLE,
            payload: article
        });
    } catch (error) {
        console.log("Article was not found!!");
    }
   
   
};
