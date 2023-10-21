import {POWER_OFF, POWER_ON} from "../types";

const initialState = {
    sounds: [
        {
            id: 'Heater1',
            keyName: 'q',
            soundSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
            soundName: '',
            keyCode: 81
        },
        {
            id: 'Heater2',
            keyName: 'w',
            soundSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
            soundName: '',
            keyCode: 87
        },
        {
            id: 'Heater3',
            keyName: 'e',
            soundSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
            soundName: '',
            keyCode: 69
        },
        {
            id: 'Heater4',
            keyName: 'a',
            soundSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
            soundName: '',
            keyCode: 65
        },
        {
            id: 'Heater6',
            keyName: 's',
            soundSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
            soundName: '',
            keyCode: 83
        },
        {
            id: 'DscOh',
            keyName: 'd',
            soundSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
            soundName: '',
            keyCode: 68
        },
        {
            id: 'KickNHat',
            keyName: 'z',
            soundSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
            soundName: '',
            keyCode: 90
        },
        {
            id: 'RP4Kick',
            keyName: 'x',
            soundSrc: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
            soundName: '',
            keyCode: 88
        },
        {
            id: 'CevH2',
            keyName: 'c',
            soundSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
            soundName: '',
            keyCode: 67
        },
    ],
    powerOn: false,
    volume: 50
}

export const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case POWER_ON: {
            return {
                ...state,
                powerOn: true
            }
        }
        case POWER_OFF: {
            return {
                ...state,
                powerOn: false
            }
        }
        default:
            return state;
    }
}