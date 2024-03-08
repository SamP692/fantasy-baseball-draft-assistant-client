/* Core Libraries */
import { h } from "preact"

/* Modules */
import Header from "./modules/header"
import Options from "./modules/options"

/* Components */
import Main from "./components/main"

/* App */
function App() {
    return (
        <div>
            <Header />
            
            <Main>
                <Options />
            </Main>            
        </div>
    )
}

export default App
