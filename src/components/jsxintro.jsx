import React from 'react';

const JSXintro = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>JSX</h2>
                        <p>
                            It stands for JavaScript XML.<br/>
                            It allows us to write HTML in React.<br/>
                            It allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() or any methods.<br/>
                            It converts HTML tags into react elements.<br/>
                            With JSX you can write expresions inside curly braces &#123; &#125;.<br/>
                            The expression canbe a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result.<br/>
                            <strong>NOTE:</strong>The HTML code must be <b>wrapped</b> in <b>ONE</b> top level element.<br/>
                            So if you like to write two paragraphs, you must put them inside a parent element, like a div element.<b>OR</b><br/>
                            You can use <b>fragment (&lt;&gt; &lt;/&gt;)</b> to wrap <b>multiple</b> lines.<br/>
                            In JSX inbstead of class we use <b>className</b>.<br/>
                            To be able to use conditional statements in JSX, you should put the <b>if statements</b> outside of the JSX, or you could use a <b>ternary expression</b> instead.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JSXintro;