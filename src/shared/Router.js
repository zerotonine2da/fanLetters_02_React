import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';
import { data } from '../shared/data';
import DetailsUpdate from '../pages/DetailsUpdate';
import { useState } from 'react';
import DummyData from '../fakeData.json';

const Router = () => {
    console.log('DummyData', ...DummyData);
    const [comments, setComments] = useState(DummyData);
    const [writer, setWriter] = useState('');
    const [content, setContent] = useState('');
    console.log('comments', comments);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            comments={comments}
                            setComments={setComments}
                            writer={writer}
                            setWriter={setWriter}
                            content={content}
                            setContent={setContent}
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
                            writer={writer}
                            setWriter={setWriter}
                            content={content}
                            setContent={setContent}
                        />
                    }
                ></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
