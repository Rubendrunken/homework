import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import { Routes,Route, Navigate } from 'react-router-dom';
import NewsDetails from '../pages/NewsDetails';
import Manu from '../pages/Manu';
import List from '../pages/List';
import Profile from '../pages/Profile';
import Comments from '../pages/comments/Comments';
import CommentForm from '../pages/comments/CommentForm';

export default function(){
    return(
        <Routes>
            {/* <Route path='*' element={<Navigate to={"/"}/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/about/*' element={<About/>}/>
            <Route path='/news/*' element={<News/>}>
                <Route path=':id' element={<NewsDetails/>}/>
            </Route> */}
            {/* <Route path='manu' element={<Manu/>}/> */}



            {/* <Route path='/' element={<List/>}/>
            <Route path=':id' element={<Profile/>}/> */}



            <Route path='*' element={<Navigate to={"/comments"}/>}/>
            <Route path="comments" element={<Comments/>}/>
            <Route path="comments/create" element={<CommentForm/>}/>
            <Route path="comments/:id" element={<CommentForm/>}/>
                
        </Routes>
    )
}