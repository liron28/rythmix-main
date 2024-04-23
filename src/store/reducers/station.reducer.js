export const SET_STATIONS = 'SET_STATIONS'


const initialState = {
    stations: null
}

export function stationReducer(state = initialState, cmd = {}) {
    switch (cmd.type) {
        case SET_STATIONS:
            return {
                ...state,
                stations : cmd.station
            }

        default:
            return state
    }
}
