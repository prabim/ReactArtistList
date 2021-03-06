import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
//import '../public/css/style.css'

//Component
import Home from './Components/Home';
import Artist from './Components/Artist';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path='/' component={Home} />
                <Route path='/artist/:artistid' component={Artist} />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));