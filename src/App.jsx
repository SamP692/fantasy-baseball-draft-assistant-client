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
        <fragment>
            <Header />
            
            <Main>
                <Options />

                <Players />
            </Main>            
        </fragment>
    )
}

export default App
