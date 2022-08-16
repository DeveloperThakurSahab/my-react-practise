import React from 'react';

const Props = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Props</h2>
                        <p>Props are <b>arguments</b> passed into React components.<br/>
                            Props are <b>passed</b> to components via HTML attributes.<br/>
                            Props stands for <b>properties</b>.
                        </p>
                        <p>
                        React Props are like function arguments in JavaScript and attributes in HTML.
                        To send props into a component, use the same syntax as HTML attributes.
                        The component receives the argument as a props object.
                        </p>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default Props;