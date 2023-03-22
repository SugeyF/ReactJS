import React, { Component } from "react";
import './App.css';

//COMPONENTS
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import CardUser from "./components/CardUser/CardUser";

class App extends Component {
    render () {
        return (
            <div className="App">
                <Navbar />
                <Header 
                title="RAFFLE 4 GAMES"
                />
                <div className="UserSection">
                    <CardUser 
                    name="League of Legends" 
                    date="League of Legends released in 2009" 
                    description="League of Legends is one of the world's most popular video games, developed by Riot Games." 
                    img="https://1000marcas.net/wp-content/uploads/2020/11/League-of-Legends-Logo-2009.jpg"
                    />

                    <CardUser 
                    name="Overwatch" 
                    date="Overwatch released in 2016" 
                    description="Overwatch is a multimedia franchise centered on a series of online multiplayer first-person shooter (FPS) video games developed by Blizzard Entertainment" 
                    img="https://logos-world.net/wp-content/uploads/2020/05/Logo-Overwatch.jpg"
                    />

                    <CardUser 
                    name="Call of Duty: Warzone" 
                    date="Warzone released in 2020" 
                    description="Warzone is the second main battle royale installment in the Call of Duty franchise, following the Blackout mode of Call of Duty: Black Ops 4." 
                    img="https://upload.wikimedia.org/wikipedia/commons/e/e6/Call_of_Duty_Warzone_Logo.png"
                    />
                </div>
            </div>
        );
    }
}

export default App