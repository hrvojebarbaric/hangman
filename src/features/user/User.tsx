import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../app/store'
import { setUserName } from './userSlice'
import { useNavigate } from 'react-router-dom'
import { LoginButtonStyled, UserStyled } from './User.style'

const User = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        dispatch(setUserName(formData.get('username') as string))
        navigate('/hangman')
    }

    return (
        <UserStyled>
            <h1 className="title">Hangman game</h1>
            <form onSubmit={handleSubmit}>
                <label>Please enter your name</label>
                <input className="userName" type="text" name="username" required />
                <LoginButtonStyled>Start game</LoginButtonStyled>
            </form>
        </UserStyled>
    )
}

export default User
