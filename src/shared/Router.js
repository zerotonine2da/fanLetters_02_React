import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';
import DetailsUpdate from '../pages/DetailsUpdate';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>

                {/*
                <Route path="detail/:id" element={<Details />}></Route>
                <Route path="update/:id" element={<DetailsUpdate />}></Route>
*/}
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
