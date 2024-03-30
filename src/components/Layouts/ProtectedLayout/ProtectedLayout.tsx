import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../app/store'
import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import {
    LayoutContainerStyled,
    HeaderButtonStyled,
    HeaderStyled,
    ProtectedLayoutStyled,
} from './ProtectedLayout.style'
import restartImage from '../../../assets/refresh.png'
import homeImage from '../../../assets/home.png'
import {
    getQuotes,
    resetNumberOfErrors,
    resetUserInput,
    setDuration,
} from '../../../features/hangMan/hangManSlice'

const ProtectedLayout = () => {
    const user = useSelector((state: RootState) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        !user.userName && navigate('/')
    })

    return (
        <ProtectedLayoutStyled>
            <HeaderStyled>
                <div className="content">
                    <h1 className="title">Hangman game</h1>
                    <div className="userContent">
                        <p>{`Hi ${user.userName}!`}</p>
                        <HeaderButtonStyled
                            onClick={() => {
                                navigate('/hangman')
                                dispatch(getQuotes())
                                dispatch(resetNumberOfErrors())
                                dispatch(resetUserInput())
                                dispatch(setDuration(0))
                            }}
                        >
                            <img width={15} height={15} src={restartImage} alt="Restart icon" />
                        </HeaderButtonStyled>
                        <HeaderButtonStyled
                            onClick={() => {
                                navigate('/')
                                dispatch(resetNumberOfErrors())
                                dispatch(resetUserInput())
                            }}
                        >
                            <img width={15} height={15} src={homeImage} alt="Home icon" />
                        </HeaderButtonStyled>
                    </div>
                </div>
            </HeaderStyled>
            <LayoutContainerStyled>
                <Outlet />
            </LayoutContainerStyled>
        </ProtectedLayoutStyled>
    )
}

export default ProtectedLayout
