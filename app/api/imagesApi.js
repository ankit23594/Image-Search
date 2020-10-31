import axios from 'axios'

export const getImages = (searchStr) => {
    const baseUrl = 'https://www.googleapis.com/customsearch/v1'

    const request = {
        params: {
            q: searchStr,
            cx: '011476162607576381860:ra4vmliv9ti',
            key: 'AIzaSyAjTPFgulkdrELcWmo1jAa8wqtHLrztyKc'
        }
    }

    return axios.get(baseUrl, request)
}
