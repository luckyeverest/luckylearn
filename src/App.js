import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import Gallary from './components/Gallary/Gallary';
import New from './components/New/New';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import Sentence from './components/Sentence/Sentence';
import Curriculum from './components/Curriculum/Curriculum';
import Games from './components/Games/Games';
import { Route, BrowserRouter } from 'react-router-dom';

const App =()=> {
    return (<BrowserRouter>
    <div className='app'>
    <Header/>
    <Menu/>
    <div className='content'>
    <Route path='/Profile' component={Profile}/>
    <Route exact path='/Dialogs' component={Dialogs}/>
    <Route path='/Gallary' component={Gallary}/>
    <Route path='/New' component={New}/>
    <Route path='/Music' component={Music}/>
    <Route path='/Setting' component={Setting}/>
    <Route path='/Sentence' component={Sentence}/>
    <Route path='/Curriculum' component={Curriculum}/>
    <Route path='/Games' component={Games}/>
    </div>
    </div>
    </BrowserRouter>
    );
};



export default App;
