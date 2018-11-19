import {API_BASE_URL} from '../config';

export const FETCH_GAME_REQUEST = 'FETCH_GAME_REQUEST';
export const fetchGameRequest = (game) => ({
  type: FETCH_GAME_REQUEST,
})

export const FETCH_GAME_SUCCESS = 'FETCH_GAME_SECCESS';
export const fetchGameSuccess = (game) => ({
  type: FETCH_GAME_REQUEST,
  game
})

export const FETCH_GAME_ERROR = 'FETCH_GAME_ERROR';
export const fetchGameError = error => ({
  type: FETCH_GAME_ERROR,
  error
});

export const fetchGame = () => {
  dispatchEvent(fetchGameRequest());
  return fetch(`${API_BASE_URL}/api/game`)
  .then(res => res.json())
  .then(game => dispatchEvent(fetchGameSuccess(game)))
  .catch(err => dispatchEvent(fetchGameError(err)))
}