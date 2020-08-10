import React, { useState, useEffect } from 'react'
import moment from 'moment'
const Countdown = () => {
    const [date, setDate] = useState({ month: undefined, day: undefined, hour: undefined, minute: undefined, seconds: undefined })
    useEffect(() => {
        function getDate() {
            let then = moment('02/05 00:00:00', 'MM/DD hh:mm:ss')
            let now = moment()
            let countdown = moment(then - now)
            // console.log(countdown);
            let day = countdown.format('DD')
            let month = countdown.format('MM')
            let minute = countdown.format('mm')
            let seconds = countdown.format('ss')
            let hour = countdown.format('hh')
            // console.log(month, day, hour, minute, seconds);
            setDate({ month, day, hour, minute, seconds })
        }
        let det = setInterval(getDate, 1000)

        return () => {
            clearInterval(det)
        }
    }, [])


    const style = {
        color: 'white'
    }
    return (
        <>
            <section className='count' style={style}>
                <div className="container">
                    <h1>Countdown to My Birthday</h1>
                    <div className="countdown">
                        <h2><span>{date.month}</span> <br />Months</h2>
                        <h2><span>{date.day}</span> <br />Days</h2>
                        <h2><span>{date.hour}</span> <br />Hours</h2>
                        <h2><span>{date.minute}</span> <br />Minutes</h2>
                        <h2><span>{date.seconds}</span> <br />Seconds</h2>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Countdown
