/* Core Libraries */
import { h } from "preact"

/* Modules */
import Header from "./modules/header"
import Options from "./modules/options"
import Players from "./modules/players"

/* Contexts */
import { PlayersProvider } from "contexts/players"

/* Components */
import Main from "./components/main"

/* App */
function App() {
    return (
        <fragment>
            <Header />
            
            <PlayersProvider>
                <Main>
                    <Options />

                    <Players />
                </Main>            
            </PlayersProvider>
        </fragment>
    )
}

export default App
