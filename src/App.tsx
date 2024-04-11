import './App.css'
import Home from "./components/Home/Home.tsx";
import Header from "./components/Header/Header.tsx";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <div className='home-wrapper'>
                <Home/>
                <div className='home-bg'></div>
            </div>
        </div>
    )
}

export default App
