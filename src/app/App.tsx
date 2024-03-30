import HangMan from '../features/hangMan/HangMan'
import User from '../features/user/User'
import { Route, Routes } from 'react-router-dom'
import PublicLayout from '../components/Layouts/PublicLayout/PublicLayout'
import ProtectedLayout from '../components/Layouts/ProtectedLayout/ProtectedLayout'
import Score from '../features/score/Score'
import Lost from '../components/Lost/Lost'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<User />} />
            </Route>
            <Route element={<ProtectedLayout />}>
                <Route path="/hangman" element={<HangMan />} />
                <Route path="/score" element={<Score />} />
                <Route path="/lost" element={<Lost />} />
            </Route>
        </Routes>
    )
}

export default App
