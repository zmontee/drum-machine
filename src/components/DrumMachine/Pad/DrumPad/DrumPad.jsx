import React, {useCallback, useEffect, useRef} from 'react';
import s from './DrumPad.module.css';
import {connect} from "react-redux";

const DrumPad = props => {
    const handlePlay = () => {
        if(props.power) {
            document.getElementById(props.id).load();
            document.getElementById(props.id).play();
        }
    }

    const kc = props.keyCode;

    const btnRef = useRef(null);

    const checkKeyPress = useCallback(event => {
        console.log('wtf')
        if(event.keyCode === kc && btnRef && btnRef.current) {
            btnRef.current.click();
        }
    }, [props.soundSrc, kc, btnRef])

    useEffect(() => {
        window.addEventListener("keydown", checkKeyPress, false);

        return () => window.removeEventListener("keydown", checkKeyPress);
    }, [])

    return (
        <button ref={btnRef} id='btn' className={s.drumPad} onClick={handlePlay}>
            <audio id={props.id} src={props.soundSrc} />
            <p className={s.keyName}>{props.keyName}</p>
        </button>
    )
}

const mapStateToProps = state => ({
    power: state.data.powerOn
})

export default connect(mapStateToProps)(DrumPad);