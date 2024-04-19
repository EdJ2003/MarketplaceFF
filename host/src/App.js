import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <nav>
                <Link to="/app1">App 1</Link>
                <Link to="/app2">App 2</Link>
            </nav>
        </Router>
    );
}

export default App;