import React from "react";
import Footer from "./Footer";
import Nav from "./Nav"

function App() {
    return (
        <div>
            {/* child Component */}
            <Nav />
            <main>
                <p> This is where most of the content will go..</p>
            </main>
            {/* child Component */}
            <Footer />
        </div>
    );
}

export default App;
