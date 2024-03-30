import { useDispatch, useSelector } from 'react-redux'
import { addNewLetter } from '../hangManSlice'
import { AppDispatch, RootState } from '../../../app/store'
import { KeyboardButtonStyled, KeyboardStyled } from './Keyboard.style'

const Keyboard = () => {
    const { alphabetArray } = useSelector((state: RootState) => state.hangMan)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <KeyboardStyled>
            {alphabetArray.map((item, key) => (
                <KeyboardButtonStyled
                    key={key}
                    onClick={(event) => {
                        dispatch(addNewLetter(item))
                        ;(event.target as HTMLInputElement).disabled = true
                    }}
                >
                    {item}
                </KeyboardButtonStyled>
            ))}
        </KeyboardStyled>
    )
}

export default Keyboard
