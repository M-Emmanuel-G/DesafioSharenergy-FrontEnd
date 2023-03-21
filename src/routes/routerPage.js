import React from 'react';
import LoginPage from '../pages/loginPage/loginPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FirstPage from '../pages/firstPage/firstPage';
import SecondPage from '../pages/secondPage/secondPage';
import ThridPage from '../pages/thridPage/thirdPage';
import FourPage from '../pages/fourPage/fourPage';
import UpdateClients from '../pages/updateClient/updateClient';
import AddClientPage from '../pages/addClientPage/addClient';

export default function RouterPage() {
 return (
    <BrowserRouter>
        <Routes>
            <Route index element={<LoginPage/>} />
            <Route path="/firstPage" element={<FirstPage/>}/>
            <Route path="/secondPage" element={<SecondPage/>}/>
            <Route path="/thirdPage" element={<ThridPage/>}/>
            <Route path="/fourPage" element={<FourPage/>}/>
            <Route path="/addClient" element={<AddClientPage/>}/>
            <Route path="/updateClient" element={<UpdateClients/>}/>
        </Routes>
    </BrowserRouter>
 );
}