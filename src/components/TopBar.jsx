import React from 'react'

function TopBar() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* <!-- Sidebar Toggle (Topbar) --> */}
            {/* <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button> */}

            <button id='boton-menuHamburguesa' className='custom-button'>
                <i>tocar</i>
            </button>
        </nav>
    )
}

export default React.memo(TopBar)
