import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../pages/home';
import Pets from '../pages/pets';
import About from '../pages/about';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/pets' component={Pets} />
                <Route path='/about' component={About} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes