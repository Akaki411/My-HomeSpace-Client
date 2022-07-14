import React, {Component} from 'react';
import '../Styles/Preloader.css'

class Preloader extends Component
{
    state = {
        isLoading: false,
        isLoaded: false,
        isExists: true
    }

    componentDidMount()
    {
        setTimeout(() => this.StartLoading(), 3000)
    }

    StartLoading()
    {
        this.setState({isLoading: true})
        setTimeout(() => this.IsLoaded(), 8000)
    }

    IsLoaded()
    {
        this.setState({isLoaded: true})
        setTimeout(() => {this.setState({isExists: false})}, 200)
    }

    render()
    {
        return (
            <div>
                {this.state.isExists && <div className={this.state.isLoaded ? "Preloader Preloader-Disable" : "Preloader"}>
                    <div className="Preloader-Content">
                        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path
                                    className="SVG-Roof"
                                    d="M252.3,73.1c-6.6,7.6-13.1,15.2-19.7,22.7c-7.5,8.6-15,17.3-22.5,25.9
			c-6.8,7.7-13.6,15.5-20.3,23.2c-10.5,12-21,24-31.5,36c-6.7,7.6-13.4,15.3-20.1,22.9c-7.3,8.3-14.5,16.7-21.7,25
			c-6.3,7.2-12.6,14.3-18.9,21.4c-0.7,0.8-1.3,1.7-2.4,3.2c2.1,0,3.5,0,5,0c74,0,147.9,0,221.9,0c8.1,0,15.2,4.8,18,12.1
			c2.8,7.2,1.1,16-5,20.7c-3.4,2.6-8.1,4.9-12.2,4.9c-91.2,0.3-182.4,0.2-273.6,0.2c-11.5,0-22.7-12.2-18.2-24.9
			c0.9-2.5,2.8-4.7,4.6-6.7c8.8-10.3,17.7-20.6,26.6-30.8c6.8-7.9,13.7-15.7,20.6-23.5c6.7-7.6,13.4-15.2,20.1-22.9
			c7.3-8.3,14.5-16.7,21.8-25c6.7-7.7,13.4-15.3,20.1-22.9c6.9-7.8,13.7-15.7,20.6-23.5c10.3-11.8,20.7-23.6,31-35.5
			c6.9-7.8,13.7-15.7,20.6-23.5c6.1-7,12.4-13.8,18.4-20.9c9.5-11.2,26.9-10,34.1-0.1c6.1,8.4,13.4,15.9,20.2,23.8
			c7,8.1,14,16.1,21,24.1c6.8,7.7,13.6,15.5,20.3,23.2c10.5,12,20.9,24,31.4,36c6.8,7.7,13.6,15.4,20.4,23.2
			c7.1,8.1,14.2,16.3,21.3,24.4c6.9,7.8,13.8,15.6,20.6,23.5c6.8,7.7,13.6,15.5,20.4,23.2c6.8,7.7,13.5,15.5,20.3,23.2
			c1.3,1.5,3,2.7,4.2,4.2c5.2,6.1,5.9,13.1,2.8,20.2c-3.1,7.4-9.4,10.4-17.1,11.2c-9.2,1-15.6-3.6-21.1-10.1
			c-9.1-10.6-18.2-21.2-27.3-31.7c-6.9-8-13.9-15.9-20.8-23.8c-10.6-12.1-21.1-24.2-31.7-36.3c-6.4-7.3-12.7-14.5-19.1-21.8
			c-10.8-12.3-21.5-24.6-32.3-36.9c-6.7-7.7-13.4-15.3-20.1-23c-7-8-14-16.1-21.1-24.1C258.9,80.2,255.7,76.9,252.3,73.1z"
                                />
                                <path
                                    className="SVG-Walls"
                                    d="M367.8,439.4c0-1.3,0-2.5,0-3.6c0-17.1,0-34.2-0.1-51.3c0-9.8,4.1-16,13.1-19.5
			c7.9-3.2,17-0.7,23.3,5.4c4.1,4,5.2,8.7,5.2,14c0,23.7-0.1,47.3-0.2,71c0,2.9-0.2,5.8-0.8,8.7c-1.2,6.2-10,14.5-18.1,14.2
			c-0.8,0-1.5,0-2.3,0c-90.5,0-181.1-0.1-271.6,0.1c-11.2,0-20.4-8.7-20.2-20.1c0.5-36.4,0.3-72.9,0.1-109.3
			c-0.1-10.3,8.7-18.2,18.8-18.8c10.1-0.6,16.8,4.2,21.4,12.5c0.9,1.6,1,3.9,1,5.9c0.1,28.9,0,57.7,0,86.6c0,1.4,0,2.7,0,4.4
			C214.2,439.4,290.7,439.4,367.8,439.4z"
                                />
                            </g>
                        </svg>
                        <div className="Preloader-Header">
                            <h1>My HomeSpace</h1>
                        </div>
                    </div>
                    <div className={this.state.isLoading ? "LoadingState Loader-Active" : "LoadingState"}>
                        <div id="LoadingState_Loading"><div/></div>
                        <p>Подключение к серверу...</p>
                    </div>
                    <div className={this.state.isLoading ? "Loader Loader-Active" : "Loader"}>
                        <div className="Loader-Particle"/>
                        <div className="Loader-Particle" id="particle1"/>
                        <div className="Loader-Particle" id="particle2"/>
                    </div>
                </div>}
            </div>

        )
    }
}

export default Preloader;