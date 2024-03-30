import { useEffect } from 'react'
import { useStopwatch } from 'react-timer-hook'
import { setDuration } from '../../features/hangMan/hangManSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import { StopWatchStyled } from './StopWatch.style'
import { StopWatchProps } from './StopWatch.types'

const StopWatch = (props: StopWatchProps) => {
    const { autoStart } = props
    const { quotes, numberOfMissingLetters } = useSelector((state: RootState) => state.hangMan)

    const dispatch = useDispatch<AppDispatch>()

    const { totalSeconds, seconds, minutes, hours, reset, pause } = useStopwatch({
        autoStart: autoStart,
    })

    useEffect(() => {
        reset()
    }, [quotes.content, reset])

    useEffect(() => {
        if (!numberOfMissingLetters && totalSeconds !== 0) {
            pause()
            dispatch(setDuration(totalSeconds))
        }
    }, [dispatch, numberOfMissingLetters, pause, totalSeconds])

    return (
        <StopWatchStyled>
            <span>{hours.toString().padStart(2, '0')}</span>:
            <span>{minutes.toString().padStart(2, '0')}</span>:
            <span>{seconds.toString().padStart(2, '0')}</span>
        </StopWatchStyled>
    )
}

export default StopWatch
