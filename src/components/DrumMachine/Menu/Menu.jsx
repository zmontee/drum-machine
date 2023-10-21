import React from 'react';
import s from './Menu.module.css';
import {connect} from "react-redux";
import switchOff from "../../../assets/image/switch-off.png";
import switchOn from "../../../assets/image/switch-on.png";
import {powerOff, powerOn} from "../../../redux/actions/dataAction";

const Menu = props => {
    const handleClickOn = () => {
        props.powerOn();
    }

    const handleClickOff = () => {
        props.powerOff();
    }

    return (
        <div className={s.menu}>
            { props.data.powerOn ?
                <input type="image"
                       src={switchOn}
                       className={s.switch}
                       onClick={handleClickOff}
                />
                :
                <input type="image"
                       src={switchOff}
                       className={s.switch}
                       onClick={handleClickOn}
                />
            }
        </div>
    )
}

const mapStateToProps = state => ({
    data: state.data
})

const mapDispatchToProps = {
    powerOn,
    powerOff
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);