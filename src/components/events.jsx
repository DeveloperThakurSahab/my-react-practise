import React from 'react';

const Events = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Events</h2>
                        <p>
                            Just like HTML DOM events, React can perform actions based on user events.<br/>
                            React has the same events as HTML: click, change, mouseover etc.
                        </p>
                        <h3>Adding Events</h3>
                        <p>React events are written in <b>camelCase</b> syntax, e.g: <b>onClick</b><br/>
                            React event hasndlers are written inside <b>curly braces</b>, e.g: <b>onClick= &#123;shoot&#125;</b>
                        </p>
                        <p>To pass an argument to an event handler, use an <b>arrow function</b>.</p>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default Events;