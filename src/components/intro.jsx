import React from 'react';

const Intro = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>React</h2>
                        <p>React is a <b>JavaScript library</b> for building user interfaces.</p>
                        <p>For creating a new react-app:<br/>
                            -&gt; npx create-react-app my-app<br/>
                            -&gt; cd my-app<br/>
                            -&gt; npm start.
                        </p>
                        <p>React is a <b>tool</b> for building UI Components.</p>
                        <p>How it works?</p>
                        <p>It creates a <b>VIRTUAL DOM</b> in memory.<br/>It only changes what <b>we needs to be changed</b>.</p>
                        <p>React <b>renders</b> HTML to the web page by using a function called <b>ReactDOM.render()</b>.</p>
                        <p>The <b>Root Node</b> is like a <b>container</b> for content managed by React.</p>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default Intro;