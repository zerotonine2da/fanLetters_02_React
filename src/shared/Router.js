import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';
import DetailsUpdate from '../pages/DetailsUpdate';
import { useState } from 'react';
import DummyData from '../fakeData.json';

const Router = () => {
    const [comments, setComments] = useState(DummyData);
    const [clickedMember, setclickedMember] = useState('하니');

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            comments={comments}
                            setComments={setComments}
                            clickedMember={clickedMember}
                            setclickedMember={setclickedMember}
                        />
                    }
                ></Route>
                <Route path="detail/:id" element={<Details comments={comments} setComments={setComments} />}></Route>
                <Route
                    path="update/:id"
                    element={
                        <DetailsUpdate
                            comments={comments}
                            setComments={setComments}
                            setclickedMember={setclickedMember}
                        />
                    }
                ></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
