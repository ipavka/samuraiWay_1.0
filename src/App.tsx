import React from 'react';
import './App.css';

function App() {
    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9Bj04UUgRET0JT4J8kZ3Lq60KlDUrrUAuA&usqp=CAU"
                    alt="logo"/>
            </header>
            <nav className={'nav'}>
                <div>
                    <a href="#">Profile</a>
                </div>
                <div>
                    <a href="#">Messages</a>
                </div>
                <div>
                    <a href="#">News</a>
                </div>
                <div>
                    <a href="#">Music</a>
                </div>
                <div>
                    <a href="#">Settings</a>
                </div>
            </nav>
            <div className={'content'}>
                <div>
                    <img
                        src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
