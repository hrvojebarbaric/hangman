import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Provider store={store}>
            <GlobalStyle />
            <App />
        </Provider>
    </BrowserRouter>
)
