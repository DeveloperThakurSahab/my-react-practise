import React from 'react';

const Router = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>React Router</h2>
                        <p>React Router is used to include page routing in react app.</p>
                        <p>
                            We <b>wrap</b> our content first with <b>&lt;BrowserRouter&gt;</b>.<br/>
                            Then we define our <b>&lt;Routes&gt;</b>. An application can have multiple <b>&lt;Routes&gt;</b>.
                        </p>
                        <p>
                            <b>&lt;Route&gt;</b> can be nested. The first <b>&lt;Route&gt;</b> has a path of <b>/</b> and renders the <b>Layout</b> component.<br/>
                            The nested <b>&lt;Route&gt;</b>s inherit and add to the parent route.
                        </p>
                        <p>The <b>Home</b> component route does not have a path but has an <b>index</b> attribute. That specifies this route as the default route for the parent route, which is <b>/</b>.</p>
                        <p>Setting the <b>path</b> to <b>*</b> will act as a catch-all for any undefined URLs. This is great for a 404 error page.</p>
                        <p>
                            The <b>Layout</b> component has <b>&lt;Outlet&gt;</b> and <b>&lt;Link&gt;</b> elements.<br/>
                            The <b>&lt;Outlet&gt;</b> renders the current route selected.<br/>
                            <b>&lt;Link&gt;</b> is used to set the URL and keep track of browsing history.
                        </p>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default Router;