import {POWER_OFF, POWER_ON} from "../types";

export const powerOn = () => dispatch => {
    dispatch({ type: POWER_ON });
}

export const powerOff = () => dispatch => {
    dispatch({ type: POWER_OFF });
}