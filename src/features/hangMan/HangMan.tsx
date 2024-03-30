import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import { getQuotes, gameNextMove } from './hangManSlice'
import { useEffect } from 'react'
import { STATUS_FAILED, STATUS_LOADING } from '../../utils/constants'
import { getUniqueCharacters, showLetters } from '../../utils/helpers'
import Gallows from './Gallows/Gallows'
import Keyboard from './Keyboard/Keyboard'
import { HangManStyled } from './HangMan.style'
import Loader from '../../components/Loader/Loader'
import StopWatch from '../../components/StopWatch/StopWatch'
import { useNavigate } from 'react-router-dom'
import { createScore } from '../score/scoreSlice'

const HangMan = () => {
    const {
        quotes,
        quoteStatus,
        hiddenQuote,
        userInput,
        numberOfMissingLetters,
        numberOfErrors,
        duration,
    } = useSelector((state: RootState) => state.hangMan)
    const { userName } = useSelector((state: RootState) => state.user)

    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getQuotes())
    }, [dispatch])

    useEffect(() => {
        dispatch(gameNextMove(showLetters(userInput, quotes.content)))
    }, [dispatch, userInput, quotes.content, numberOfMissingLetters])

    useEffect(() => {
        if (!numberOfMissingLetters && duration !== 0) {
            dispatch(
                createScore({
                    quoteId: quotes._id,
                    length: quotes.content.length,
                    uniqueCharacters: getUniqueCharacters(quotes.content).length,
                    userName: userName,
                    errors: numberOfErrors,
                    duration: duration,
                })
            )
            navigate('/score')
        }
        numberOfErrors === 6 && navigate('/lost')
    }, [
        dispatch,
        duration,
        navigate,
        numberOfErrors,
        numberOfMissingLetters,
        quotes._id,
        quotes.content,
        userName,
    ])

    if (quoteStatus === STATUS_LOADING) return <Loader />
    if (quoteStatus === STATUS_FAILED) return <p>Something went wrong...</p>

    return (
        <HangManStyled>
            <StopWatch autoStart={true} />
            <h3>{quotes.author}</h3>
            <h2 className="qoute">{hiddenQuote}</h2>
            <div className="gallKeyWrapper">
                <Gallows />
                <Keyboard />
            </div>
        </HangManStyled>
    )
}

export default HangMan
