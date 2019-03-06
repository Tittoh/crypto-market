// Actions -> informs reducers the state that should be uodated in the store
import { FETCH_TOP_10_SUCCESS, FETCH_TOP_10_FAILURE, FETCH_TOP_10_REQUEST } from './constants';
import api from '../../utils/api'

export const topTenFetch = () => ({
  type: FETCH_TOP_10_REQUEST,
});

export const topTenFetchSuccess = payload => ({
  type: FETCH_TOP_10_SUCCESS,
  payload,
});

export const topTenFetchFailure = errors => ({
  type: FETCH_TOP_10_FAILURE,
  errors,
});


const fetchTopTen = () => (dispatch) => {
  console.log("getting dispatched")
  dispatch(topTenFetch())
  return api({
    method: 'GET',
    endpoint: '/top/totalvolfull?limit=10&tsym=USD',
  })
    .then((res) => {
      dispatch(topTenFetchSuccess(res))
    })
    .catch(err => console.log(err));
};
export default fetchTopTen;
