import * as types from './ActionTypes';

export function loadStatsSuccess(stats) {
  return { type: types.LOAD_STATS_SUCCESS, stats };
}