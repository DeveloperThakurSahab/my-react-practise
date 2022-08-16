import React from 'react';

const Modules = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Modules</h2>
                        <p>
                            Modules allow you to <b>break up your code</b> into separate files.<br/>
                            This makes it easier to maintain the code-base.<br/>
                            ES Modules rely on the <b>import and export</b> statements.
                        </p>
                        <h3>Exports</h3>
                        <p>You can export a function or variable from any file.<br/>
                            There are two types of exports: <b>Named</b> and <b>Default</b>.
                        </p>
                        <div className="row">
                            <div className="col">
                                <h3>Named Export</h3>
                                <p>You can create named exports two ways: <b>In-line individually</b> or <b>all at once at the bottom</b>.</p>
                            </div>
                            <div className="col">
                                <h3>Default Export</h3>
                                <p>You can only have <b>one default</b> export in a file.</p>
                            </div>
                        </div>
                        <h3>Imports</h3>
                        <p>You can import modules into a file in two ways, based on if they are <b>named exports</b> or <b>default exports</b>.</p>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default Modules;