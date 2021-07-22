import path from 'path';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const files = require.context('.', true, /\.demo\.jsx$/).keys();

const catalogMap = {};

files.forEach(file => {
    const module = require(__dirname + path.resolve(file)).default;
    catalogMap[path.resolve(file)] = module;
});

function Links() {
    return Object.keys(catalogMap).map(route => (<div key={route}><Link to={route}>{route}</Link></div>));
}

function Catalog() {
    return (<div>
        <BrowserRouter>
            <Switch>
                <Route key={'/'} path="/" component={Links} exact />
                {
                    Object.keys(catalogMap).map(route => (
                        <Route key={route} path={route} component={catalogMap[route]} />
                    ))
                }
            </Switch>
        </BrowserRouter>
    </div>)
}


export default Catalog