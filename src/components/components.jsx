import React from 'react';

const Components = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Components</h2>
                        <p>Components are like <b>functions</b> that <b>return</b> HTML elements.<br/>
                            Components are independent and reusable bits of code. They serve the same purpose as 
                            JavaScript functions, but work in isolation and return HTML.
                        </p>
                        <p>Components comes in two types: <b>Class Components</b> and <b>Function Components</b>.</p>
                        <div className="row">
                            <div className="col">
                                <h3>Class Component</h3>
                                <p>A class component must include the extends React.Component statement.<br/>
                                    This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.<br/>
                                    The component also requires a render() method, this method returns HTML.
                                </p>
                            </div>
                            <div className="col">
                                <h3>Function Component</h3>
                                <p>A Function component also returns HTML, and behaves much the same way as a Class component.<br/>
                                    But Function components can be written using much less code, are easier to understand.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default Components;