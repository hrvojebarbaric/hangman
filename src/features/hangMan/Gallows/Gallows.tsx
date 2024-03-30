import { useEffect } from 'react'
import { increaseNumberOfErrors } from '../hangManSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../app/store'
import useStateChange from '../../../hooks/useStateChange'
import { GallowsStyled } from './Gallows.style'

const Gallows = () => {
    const { numberOfErrors, numberOfMissingLetters, userInput } = useSelector(
        (state: RootState) => state.hangMan
    )
    const dispatch = useDispatch<AppDispatch>()

    const { isStateChanged, setStateChange } = useStateChange(numberOfMissingLetters, userInput)

    useEffect(() => {
        if (isStateChanged === false) {
            dispatch(increaseNumberOfErrors())
            setStateChange(true)
        }
    }, [dispatch, isStateChanged, setStateChange])

    return (
        <GallowsStyled $errors={numberOfErrors}>
            <div className="mainLine" />
            <div className="topHorizontal" />
            <div className="topVertical" />
            <div className="supportLine" />
            <div className="bottomHorizontal" />
            <div className="hangMan">
                <div className="head" />
                <div className="body" />
                <div className="leftArm" />
                <div className="rightArm" />
                <div className="leftLeg" />
                <div className="rightLeg" />
            </div>
        </GallowsStyled>
    )
}

export default Gallows
