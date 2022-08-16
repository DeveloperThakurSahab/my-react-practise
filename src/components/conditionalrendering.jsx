import React from 'react';

const ConditionalRendering = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Conditional Rendering</h2>
                        <p>There are several ways to do this:</p>
                        <div className="row">
                            <div className="col">
                                <h3>if Statement</h3>
                                <p>We can use the <b>if</b> JavaScript operator to decide which component to render.</p>
                            </div>
                            <div className="col">
                                <h3>Logical &#38;&#38; Operator</h3>
                                <p>If the first expression is true, then the expression after &#38;&#38; will render.</p>
                            </div>
                            <div className="col">
                                <h3>Ternary Operator</h3>
                                <p>The ternary operator is a simplified conditional operator like <b>if / else</b>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConditionalRendering;