import * as types from './ActionTypes';

export function isLoading(flag) {
    return { type: types.ISLOADING, flag };
};