import React from 'react';
import s from './Pad.module.css'
import DrumPad from "./DrumPad/DrumPad";
import {connect} from "react-redux";

class Pad extends React.Component {
    render() {
        const drumPadElements = this.props.sounds.map(dp => <DrumPad key={dp.keyName} keyName={dp.keyName}
                                                                     id={dp.id}
                                                                     soundSrc={dp.soundSrc}
                                                         keyCode={dp.keyCode}
        />)

        return (
            <div className={s.pad}>
                {drumPadElements}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    sounds: state.data.sounds,
})

export default connect(mapStateToProps, {})(Pad);