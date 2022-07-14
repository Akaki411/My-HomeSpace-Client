import './Styles/App.css'
import './Styles/Menu.css'
import {Component} from "react"
import Menu from "./components/menu"
import Logo from "./media/Logo.svg"
import MainPanel from './media/MainPanel.svg'

class App extends Component
{
    state = {
        panel: {id: 1, logo: Logo, isActive: true},
        water: {id: 2, logo: MainPanel, isActive: false},
        electricity: {id: 3, logo: MainPanel, isActive: false},
        air: {id: 4, logo: MainPanel, isActive: false},
        security: {id: 5, logo: MainPanel, isActive: false},
        cameras: {id: 6, logo: MainPanel, isActive: false},
        home: {id: 7, logo: MainPanel, isActive: false}
    }

    OnMenuButtonPress(id)
    {
        let object = this.state
        Object.keys(this.state).forEach((cell) => {
            let component = object[cell]
            component.isActive = component.id === id
            object[cell] = component
        })
        this.setState(object)
    }

    render()
    {
        return (
            <div className="Wrapper">
                <Menu cells={this.state} click={(id) => this.OnMenuButtonPress(id)}/>
            </div>
        )
    }

}

export default App;
