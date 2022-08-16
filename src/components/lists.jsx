import React from 'react';

const Lists = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Lists</h2>
                        <p>In React, you will render lists with some type of loop.<br/>
                            The <b>map()</b> array method is generally the preferred method.
                        </p>
                        <h3>Keys</h3>
                        <p>Keys allow React to keep track of elements. <br/>
                            This way, if an item is <b>updated or removed</b> only that item will be <b>re-rendered</b> instead of the entire list.<br/>
                            Keys need to be <b>unique</b> to each sibling. But they can be duplicated globally.<br/>
                            Generally, the key should be a unique ID assigned to each item. As a last resort, you can usae the <b>array index</b> as a key.
                        </p>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default Lists;