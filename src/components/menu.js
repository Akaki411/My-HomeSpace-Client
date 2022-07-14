import React from 'react';
import {Component} from "react";
import { ReactSVG } from 'react-svg'

class Menu extends Component
{
    render()
    {
        return (
            <div className="Menu">
                {Object.keys(this.props.cells).map((cell) => {
                    return <Cell key={cell} id={this.props.cells[cell].id} click={(id) => {this.props.click(id)}} logo={this.props.cells[cell].logo} maskID={cell} isActive={this.props.cells[cell].isActive}/>
                })}
            </div>
        )
    }
}

const Cell = (props) => {
    return(
        <div className={props.isActive ? "Menu-Button Menu-Button_Active" : "Menu-Button"} onClick={() => {props.click(props.id)} }>
            <ReactSVG src={props.logo}/>
        </div>
    )
}

export default Menu;