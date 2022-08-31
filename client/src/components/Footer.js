export default function Footer () {
    const footerContainer = {
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
        <div className="bg-slate-800" style={footerContainer}>
            <a href="https://github.com/catcueto">
                <img style={avatar} src="cat-avatar.png" alt="Catalina's Avatar"/>
            </a>
            <a href="https://github.com/hawkjosh">
                <img style={avatar} src="josh-avatar.png" alt="Josh's Avatar"/>
            </a>
            <a href="https://github.com/howardk97">
                <img style={avatar} src="kimberly-avatar.png" alt="Kimberly's Avatar"/>
            </a>
            <a href="https://github.com/ericwittenstein">
                <img style={avatar} src="eric-avatar.png" alt="Eric's Avatar"/>
            </a>
        </div>
    )
}