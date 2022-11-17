/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
//


window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        const navText = document.body.querySelector('#textNav');
        const navText2 = document.body.querySelector('#textNav2');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

        if (!navText) {
            return;
        }
        if (window.scrollY === 0) {
            navText.classList.remove('navbar-text')
        } else {
            navText.classList.add('navbar-text')
        }
        if (!navText2) {
            return;
        }
        if (window.scrollY === 0) {
            navText2.classList.remove('navbar-text')
        } else {
            navText2.classList.add('navbar-text')
        }

    };


    navbarShrink();

    document.addEventListener('scroll', navbarShrink);


    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };


    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
