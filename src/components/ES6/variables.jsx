import React from 'react';

const Variables = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Variables</h2>
                        <p>There are three ways of defining our variables: <b>var</b>, <b>let</b> and <b>const</b>.</p>
                        <p><b>var</b> has a <b>function</b> scope, not a block scope.<br/>
                            <b>let</b> has a <b>block</b> scope.<br/>
                            <b>const</b> has a <b>block</b> scope.
                        </p>
                        <p><b>const</b> is a variable that once it has been created, it's value can never change.</p>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default Variables;