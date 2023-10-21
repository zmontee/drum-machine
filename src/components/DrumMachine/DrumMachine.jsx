import React from 'react';
import s from './DrumMachine.module.css';
import Pad from "./Pad/Pad";
import Menu from "./Menu/Menu";

const DrumMachine = props => {
    return (
        <div className={s.machineBox}>
            <Pad/>
            <Menu/>
        </div>
    )
}

export default DrumMachine;