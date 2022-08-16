import React from 'react';

const ClassComponents = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Class Component</h2>
                        <p>Class components were the only way to track state and lifecycle on a React component. Function components were considered "state-less".</p>
                        <p>With the addition of Hooks, Function components are now almost equivalent to Class components. The differences are so minor that you will probably never need to use a Class component in React.</p>
                        <h3>Create a Class Component</h3>
                        <p>
                            When creating a React component, the component's name must start with an <b>upper case</b> letter.<br/>
                            The component has to include the <b>extends React.Component</b> statement.<br/>
                            The component also requires a <b>render()</b> method, this method <b>returns</b> HTML.
                        </p>
                        <h3>Component Constructor</h3>
                        <p>
                            If there is a <b>constructor()</b> function in your component, this function will be called when the component gets <b>initiated</b>.<br/>
                            The constructor function is where you initiate the component's properties.<br/>
                            In React, component properties should be kept in an object called <b>state</b>.<br/>
                            The constructor function is also where you honor the <b>inheritance</b> of the parent component by including the <b>super()</b> statement, 
                            which executes the <b>parent</b> component's constructor function, 
                            and your component has access to all the functions of the parent component <b>(React.Component)</b>.
                        </p>
                        <h3>Props in Constructor</h3>
                        <p>Another way of handling component properties is by using <b>props</b>.<br/>
                        If your component has a constructor function, the props should always be passed to the constructor and also to the React.Component via the <b>super()</b> method.
                        </p>
                        <h3>Components in File</h3>
                        <p>React is all about re-using code, and it can be smart to insert some of your components in separate files.<br/>
                            To do that, create a new file with a .js file extension and put the code inside it.<br/>
                            Note that the file must start by importing React (as before), and it has to end with the statement export default Name of File.
                        </p>
                        <h3>Class Component State</h3>
                        <p>React Class components have a built-in <b>state</b> object.<br/>
                            The state object is where you store property values that belongs to the component.<br/>
                            When the <b>state</b> object changes, the component <b>re-renders</b>.<br/>
                            The state object is initialized in the constructor and the state object can contain as many properties as you like.<br/>
                            Refer to the <b>state object</b> anywhere in the component by using the <b>this.state.propertyname</b>.<br/>
                            To change a value in the state object, use the <b>this.setState()</b> method.<br/>
                            When a value in the <b>state</b> object changes, the component will <b>re-render</b>, meaning that the output will change according to the new value(s).<br/>
                            Always use the <b>setState()</b> method to change the state object, it will ensure that the component knows its been updated and calls the <b>render()</b> method.
                        </p>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default ClassComponents;