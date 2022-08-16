import React from 'react';

const Forms = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Forms</h2>
                        <p>Handling forms is about how you handle the data when it changes value or gets submitted.</p>
                        <p>In HTML, form data is usually handled by the <b>DOM</b>.<br/>
                            In React, form data is usually handled by the <b>components</b>.<br/>
                            When the data is handled by the components, all the data is stored in the <b>component state</b>.<br/>
                            You can control changes by adding <b>event handlers </b>in the onChange attribute.<br/>
                            We can use the <b>useState Hook</b> to keep track of each inputs value and provide a "single source of truth" for the entire application.
                        </p>
                        <p>You can control the submit action by adding an event handler in the <b>onSubmit</b> attribute for the &lt;form&gt;.</p>
                        <p>You can control the values of more than one input field by adding a <b>name attribute</b> to each element.<br/>
                            We will initialize our state with an <b>empty object</b>.<br/>
                            To access the fields in the event handler use the <b>event.target.name</b> and <b>event.target.value</b> syntax.<br/>
                            To <b>update</b> the state, use <b>square brackets [bracket notation]</b> around the property name.
                        </p>
                        <p>We use the same event handler function for both input fields, we could write one event handler for each, 
                            but this gives us much cleaner code and is the preferred way in React.
                        </p>
                        <p>
                            In HTML the value of a textarea was the text between the start tag &lt;textarea&gt; and the end tag &lt;/textarea&gt;.<br/>
                            In React the value of a textarea is placed in a value attribute. We'll use the <b>useState Hook</b> to mange the value of the textarea.
                        </p>
                        <p>
                            In HTML, the selected value in the drop down list was defined with the <b>selected</b> attribute.<br/>
                            In React, the selected value is defined with a <b>value</b> attribute on the <b>select</b> tag.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Forms;