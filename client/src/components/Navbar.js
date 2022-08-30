let navbarElement;

export default function Navbar () {
    function screenSize () {
        if(window.matchMedia("(min-width: 20px)").matches) {
            navbarElement = <h1>Cheese</h1>
        } else {
            navbarElement = <h1>Gravy</h1>
        }
        return navbarElement;
    }
    return (
    // <div>
    //     <nav class="navbar navbar-dark bg-dark">
    //     <div class="container-fluid">
    //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span class="navbar-toggler-icon"></span>
    //         </button>
    //     </div>
    //     </nav>
    //     <div class="collapse" id="navbarToggleExternalContent">
    //         <div class="bg-dark p-4">
    //             <h5 class="text-white h4">Collapsed content</h5>
    //             <span class="text-muted">Toggleable via the navbar brand.</span>
    //         </div>
    //     </div>
    // </div>
    <div>
        {screenSize()}
    </div>
    )
}