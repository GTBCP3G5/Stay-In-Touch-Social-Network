export default function Footer () {
    const footerContainer = {
        backgroundColor: "#423e4f",
        height: "7rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    const avatar = {
        width: "5rem",
        height: "5rem",
        margin: "1rem"
    }
    return (
        <div style={footerContainer}>
            {/* Put github profile like in href */}
            <a href="https://github.com/catcueto">
                {/* Put image in src */}
                <img style={avatar} src="cat-avatar.png" alt="Catalina's Avatar"/>
            </a>
            {/* Put github profile like in href */}
            <a href="https://github.com/ericwittenstein">
                {/* Put image in src */}
                <img style={avatar} src="eric-avatar.png" alt="Eric's Avatar"/>
            </a>
            {/* Put github profile like in href */}
            <a href="https://github.com/hawkjosh">
                {/* Put image in src */}
                <img style={avatar} src="#" alt="Josh's Avatar"/>
            </a>
            <a href="https://github.com/howardk97">
                <img style={avatar} src="kimberly-avatar.png" alt="Kimberly's Avatar"/>
            </a>
        </div>
    )
}