import React from 'react';
import Character from "../character/Character";

const Characters = () => {
    return (
        <div>
            <Character name={'bart'} img={'https://www.shutterstock.com/shutterstock/photos/2314899459/display_1500/stock-vector-bart-simpson-cartoon-character-isolated-on-white-background-2314899459.jpg'}/>
            <Character name={'homer'} img={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi esse fugit labore minima officia placeat, reprehenderit sint voluptas. Fugiat, odit.
            </Character>
        </div>
    );
};

export default Characters;