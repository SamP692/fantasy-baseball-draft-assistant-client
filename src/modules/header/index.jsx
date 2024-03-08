/* Core Libraries */
import { h } from "preact"

/* Components */
import Container from "./container"
import HeaderText from "./header-text"
import SubheaderText from "./subheader-text"

/* Text */
const text = {
    header: "2023 Fantasy Baseball Draft Kit",
    subheader: "A draft tool designed for the Seam Heads keeper league"
}

/* Header */
function Header() {
    return (
        <Container>
            <HeaderText>
                {text.header}
            </HeaderText>

            <SubheaderText>
                {text.subheader}
            </SubheaderText>
        </Container>
    )
}

export default Header
