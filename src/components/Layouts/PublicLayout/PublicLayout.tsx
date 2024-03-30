import { Outlet } from 'react-router-dom'
import { PublicLayoutStyled } from './PublicLayout.style'

const PublicLayout = () => {
    return (
        <PublicLayoutStyled>
            <Outlet />
        </PublicLayoutStyled>
    )
}

export default PublicLayout
