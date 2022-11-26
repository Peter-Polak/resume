import { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import GlobalStyle from "./styles/GlobalStyle";
import { darkTheme } from './styles/Themes';

import Resume from './pages/Resume';
import { person } from "./data/Person";
import { defaultLanguage } from './utilities/Settings';
import { SupportedLanguage } from './utilities/Types';

interface IAppState
{
    
}

class App extends Component<{}, IAppState>
{
    constructor(props : {})
    {
        super(props);
        this.state = 
        {
            
        }
    }
    
    componentDidMount()
    {
        document.title = `Resume - ${person.personalInformation.name} ${person.personalInformation.surname}`;
    }
    
    getRoutes()
    {
        let routes : Array<JSX.Element> = [];
        
        for(const language in SupportedLanguage)
        {
            const route = <Route path={`/${language}`} render={ (props) => <Resume language={language as SupportedLanguage} person={person}/>} key={language}/>;
            routes.push(route);
        }
        
        const defaultRoute = <Route path={`/`} render={ (props) => <Resume language={defaultLanguage} person={person}/>} key={defaultLanguage}/>;
        routes.push(defaultRoute);
        
        return routes;
    }
    
    render() : JSX.Element
    {
        return (
            <ThemeProvider theme={darkTheme}>
                <Switch>
                    { this.getRoutes() }
                </Switch>
                
                <GlobalStyle/>
            </ThemeProvider>
        );
    }
}

export default App;