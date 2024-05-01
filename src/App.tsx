import './App.module.css';
import Home from './components/Home/Home.tsx';
import Header from './components/Header/Header.tsx';
import style from './App.module.css';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className={style.appWrapper}>
            <div className={style.headerWrapper}>
                <Header />
            </div>

            <Routes>
                <Route
                    path="/"
                    element={
                        <div className={style.homeWrapper}>
                            <Home />
                            <div className={style.homeBg}></div>
                        </div>
                    }
                />
                <Route
                    path="/home"
                    element={
                        <div className={style.homeWrapper}>
                            <Home />
                            <div className={style.homeBg}></div>
                        </div>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
