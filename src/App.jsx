/* Core Libraries */
import { h } from "preact"

/* Modules */
import Header from "./modules/header"
import Options from "./modules/options"
import Players from "./modules/players"

/* Components */
import Main from "./components/main"

/* App */
function App() {
    return (
        <div>
            <Header />
            
            <Main>
                <Options />

                <Players />
            </Main>            
        </div>
    )
}

export default App
