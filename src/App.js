import '@fontsource/roboto/300.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import {Navbar, ChannelDetail, Feed, SearchFeed, VideoDetail} from './components'

const App = () => (

    <BrowserRouter>
        <Box sx={{backgroundColor: '#000'}}>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Feed/>} />
                <Route path='/video/:id' exact element={<VideoDetail/>} />
                <Route path='/channel/:id' exact element={<ChannelDetail/>} />
                <Route path='/search/:searchTerm' exact element={<SearchFeed/>} />
            </Routes>
        </Box>
    </BrowserRouter>

);

export default App