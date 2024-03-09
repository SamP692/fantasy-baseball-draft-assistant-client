/* Core Libraries */
import { h } from "preact"

/* Modules */
import Header from "./modules/header"
import Options from "./modules/options"
import Players from "./modules/players"

/* Contexts */
import { BattersProvider } from "contexts/batters"

/* Components */
import Main from "./components/main"

/* App */
function App() {
    return (
        <fragment>
            <Header />
            
            <BattersProvider>
                <Main>
                    <Options />

                    <Players />
                </Main>            
            </BattersProvider>
        </fragment>
    )
}

export default App
