import React from 'react';

const Lifecycle = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Lifecycle of Components</h2>
                        <p>Each component in React has a lifecycle which you can monitor and 
                            manipulate during its three main phrases are: <b>Mounting</b>, <b>Updating</b> and <b>Unmounting</b>.
                        </p>
                        <div className="row">
                            <div className="col">
                            <h3>Mounting</h3>
                                <p>
                                    Mounting means putting elements into the DOM.<br/>
                                    React has four built-in methods that gets called, in this order, when mounting a component:
                                    <ol>
                                        <li><b>constructor()</b></li>
                                        <li><b>getDerivedSateFromProps()</b></li>
                                        <li><b>render()</b></li>
                                        <li><b>componentDidMount()</b></li>
                                    </ol>
                                    The <b>render()</b> method is required and will always be called, the others are optional and will be called if you define them.
                                </p>
                                <p>
                                    <h3>constructor</h3>
                                    <p>The <b>constructor()</b> method is called before anything else, when the component is <b>initiated</b>, 
                                    and it is the natural place to set up the <b>initial state</b> and other <b>initial values</b>.<br/>
                                        The <b>constructor()</b> method is called with the <b>props</b>, as arguments, 
                                        and you should always start by calling the <b>super(props)</b> before anything else, 
                                        this will initiate the parent's constructor method 
                                        and allows the component to inherit methods from its parent <b>(React.Component)</b>.<br/>
                                        The constructor method is called, by React, <b>every time</b> you make a component.
                                    </p>
                                </p>
                                <p>
                                    <h3>getDerivedStateFormProps</h3>
                                    <p>
                                        The <b>getDerivedStateFromProps()</b> method is called right <b>before rendering</b> the element(s) in the DOM.<br/>
                                        This is the natural place to set the <b>state</b> object based on the initial <b>props</b>.<br/>
                                        It takes <b>state</b> as an argument, and returns an object with changes to the <b>state</b>.
                                    </p>
                                </p>
                                <p>
                                    <h3>render</h3>
                                    <p>
                                        The <b>render()</b> method is required, and is the method that actually outputs the HTML to the DOM.
                                    </p>
                                </p>
                                <p>
                                    <h3>componentDidMount</h3>
                                    <p>
                                        The <b>componentDidMount()</b> method is called <b>after</b> the component is rendered.<br/>
                                        This is where you run statements that requires that the component is already placed in the DOM.
                                    </p>
                                </p>
                            </div>
                            <div className="col">
                            <h3>Updating</h3>
                                <p>
                                    The next phase in the lifecycle is when a component is updated.<br/>
                                    A component is updated whenever there is a change in the component's state or props.<br/>
                                    React has five built-in methods that gets called, in this order, when a component is updated:
                                    <ol>
                                        <li><b>getDerivedSateFromProps()</b></li>
                                        <li><b>shouldComponentUpdate()</b></li>
                                        <li><b>render()</b></li>
                                        <li><b>getSnapshotBeforeUpdate()</b></li>
                                        <li><b>componentDidUpdate()</b></li>
                                    </ol>
                                    The <b>render()</b> method is required and will always be called, 
                                    the others are optional and will be called if you define them.
                                </p>
                                <p>
                                    <h3>getDerivedStateFromProps</h3>
                                    <p>
                                        Also at updates the getDerivedStateFromProps method is called. 
                                        This is the first method that is called when a component gets updated.<br/>
                                        This is still the natural place to set the state object based on the initial props.<br/>
                                        If the component gets updated, the <b>getDerivedStateFromProps()</b> method is called.
                                    </p>
                                </p>
                                <p>
                                    <h3>shouldComponentUpdate</h3>
                                    <p>
                                        In the <b>shouldComponentUpdate()</b> method you can 
                                        return a <b>Boolean</b> value that specifies whether React should 
                                        continue with the rendering or not.<br/>
                                        The default value is <b>true</b>.<br/>
                                        If shouldComponentUpdate() method returns false then you can stop the component from rendering at any update.
                                    </p>
                                </p>
                                <p>
                                    <h3>render</h3>
                                    <p>
                                        The render() method is of course called when a component gets updated, 
                                        it has to re-render the HTML to the DOM, with the new changes.
                                    </p>
                                </p>
                                <p>
                                    <h3>getSnapshotBeforeUpdate</h3>
                                    <p>
                                        In the <b>getSnapshotBeforeUpdate()</b> method you have access to the <b>props</b> and <b>state</b> before the update, 
                                        meaning that even after the update, you can check what the values were before the update.<br/>
                                        If the <b>getSnapshotBeforeUpdate()</b> method is present, 
                                        you should also include the <b>componentDidUpdate()</b> method, 
                                        otherwise you will get an error.<br/>
                                        Use the <b>getSnapshotBeforeUpdate()</b> method to find out what the <b>state</b> object looked like before the update.
                                    </p>
                                </p>
                                <p>
                                    <h3>componentdidUpdate</h3>
                                    <p>
                                        The <b>componentDidUpdate</b> method is called after the component is updated in the DOM.
                                    </p>
                                </p>
                            </div>
                            <div className="col">
                                <h2>Unmounting</h2>
                                <p>
                                    The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.<br/>
                                    React has only one built-in method that gets called when a component is unmounted:
                                    <ol>
                                        <li><b>componentWillUnmount()</b></li>
                                    </ol>
                                </p>
                                <p>
                                    <h3>componentwillUnmount</h3>
                                    <p>The <b>componentWillUnmount</b> method is called when the component is about to <b>removed</b> from the DOM.</p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default Lifecycle;