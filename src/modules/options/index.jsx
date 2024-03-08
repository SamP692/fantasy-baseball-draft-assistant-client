/* Core Libraries */
import { h } from "preact"

/* Components */
import Container from "./container"
import Header from "./header"
import OptionsList from "./options-list"

/* Text */
const text = {
    title: "Controls"
}

/* Options */
function Options() {
    return (
        <Container>
            <Header>
                {text.title}
            </Header>

            <OptionsList>
                <ul>
                    <li>Filter by position</li>
                    <li>Only show FAs</li>
                    <li>Only show expected FAs (which includes known FAs)</li>
                    <li>Hide (or unhide) columns</li>
                    <li>Switch between raw stats and standard deviations</li>
                    <li>Maybe include the option to navigate to the player completion view</li>
                </ul>
            </OptionsList>
        </Container>
    )
}

export default Options
