import React from 'react'
import { useTimer } from  "reactjs-countdown-hook";
import {promoteBanner} from '../../data'
export default function PromoteBanner() {

    const {
        isActive,
        counter,
        seconds,
        minutes,
        hours,
        days,
        pause,
        resume,
        reset,
        } = useTimer(10800);

    return (
        <div className="promote_banner-section">
            <div className="promote_banner-wrapper" style={{backgroundImage: `url(${promoteBanner.img})`}}>
                <div className="promote_banner-heading">
                    <h2>
                        {promoteBanner.header}
                    </h2>
                </div>
                <div className="promote_banner-fraction">
                    <p>
                        {promoteBanner.fraction}
                    </p>
                </div>
                <div className="promote_banner-information">
                    <p>
                        {promoteBanner.information}
                    </p>
                </div>
                <div className="promote_banner-countdown">
                    <div className="countdown_hour-wrapper countdown mx-0-5">
                        <h3 className="hour_number">
                            {hours}
                        </h3>
                        <p className="hour_label">
                            GIỜ
                        </p>
                    </div>
                    <div className="countdown_minute-wrapper countdown mx-0-5">
                        <h3 className="minute_number">
                            {minutes}
                        </h3>
                        <p className="minute_label">
                            PHÚT
                        </p>
                    </div>
                    <div className="countdown_second-wrapper countdown mx-0-5">
                        <h3 className="second_number">
                            {seconds}
                        </h3>
                        <p className="second_label">
                            GIÂY
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
