import React from 'react';

const ArrowFunction = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Arrow Functions</h2>
                        <p>It allows us to write shorter function syntax.<br/>
                            In arrow functions there is no need of <b>binding this</b>. <br/>
                            Because, in it the <b>this</b> keyword always represents the <b>object</b> that defined the arrow function.
                        </p>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default ArrowFunction;