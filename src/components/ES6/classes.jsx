import React from 'react';

const Classes = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Classes</h2>
                        <p>A class is a type of function, but instead of using the keyword <b>function</b> to initiate it, 
                            we use the keyword <b>class</b>, 
                            and the properties are assigned inside a <b>constructor()</b> method.
                        </p>
                        <div className="row">
                            <div className="col">
                                <h3>Simple Class Constructor</h3>
                                <p>The constructor function is called automatically when the object is initialized.</p>
                            </div>
                            <div className="col">
                                <h3>Methods in Classes</h3>
                                <p>You can call the method by referring to the object's method name followed by parenthesis().</p>
                            </div>
                            <div className="col">
                                <h3>Class Inheritance</h3>
                                <p>To create a class inheritance, we uase the <b>extends</b> keyword.<br/>
                                    A class created with a class inheritance <b>inherits</b> all the methods from the another class.
                                </p>
                            </div>
                            <div className="col">
                                <h3>Super() Method</h3>
                                <p>It refers to the parent class.<br/>
                                    By calling it in the constructor() method, we call the parent's constructor method 
                                    and gets access to the parent's properties and methods.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default Classes;