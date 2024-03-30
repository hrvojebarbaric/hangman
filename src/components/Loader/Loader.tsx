import LoadingImage from '../../assets/loader.gif'
import { LoaderStyled } from './Loader.style'

const Loader = () => {
    return (
        <LoaderStyled>
            <img src={LoadingImage} />
        </LoaderStyled>
    )
}

export default Loader
