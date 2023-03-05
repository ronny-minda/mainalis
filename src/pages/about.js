import Footer from "@/components/footer";
import Layout from "@/components/layout"
import React, { useEffect } from 'react'
import Link from "next/link";
import Head from "next/head";

const About = () => {

    useEffect(() => {

        const fun = async () => {

            /* Sticky Navigation */
            $(function () {

                var sticky = $('.sticky');
                var contentOffset;
                var nav_height;

                if (sticky.length) {

                    if (sticky.data('offset')) {
                        contentOffset = sticky.data('offset');
                    }
                    else {
                        contentOffset = sticky.offset().top;
                    }
                    nav_height = sticky.height();
                }

                var scrollTop = $(window).scrollTop();
                var window_height = $(window).height();
                var doc_height = $(document).height();

                $(window).bind('resize', function () {
                    scrollTop = $(window).scrollTop();
                    window_height = $(window).height();
                    doc_height = $(document).height();
                    navHeight();
                });

                $(window).bind('scroll', function () {
                    stickyNav();
                });

                function navHeight() {
                    sticky.css('max-height', window_height + 'px');
                }

                function stickyNav() {
                    scrollTop = $(window).scrollTop();
                    if (scrollTop > contentOffset) {
                        sticky.addClass('fixed');
                    }
                    else {
                        sticky.removeClass('fixed');
                    }
                }

            });

            $('document').ready(function () {
                var nav_height = 70;

                $("a[data-role='smoothscroll']").click(function (e) {
                    e.preventDefault();

                    var position = $($(this).attr("href")).offset().top - nav_height;

                    $("body, html").animate({
                        scrollTop: position
                    }, 1000);
                    return false;
                });
            });

            $('document').ready(function () {
                // Back to top
                var backTop = $(".back-to-top");

                $(window).scroll(function () {
                    if ($(document).scrollTop() > 400) {
                        backTop.css('visibility', 'visible');
                    }
                    else if ($(document).scrollTop() < 400) {
                        backTop.css('visibility', 'hidden');
                    }
                });

                backTop.click(function () {
                    $('html').animate({
                        scrollTop: 0
                    }, 1000);
                    return false;
                });
            });


            $('document').ready(function () {

                // Loader
                $(window).on('load', function () {
                    $('.loader-container').fadeOut();
                });

                // Tooltips
                $('[data-toggle="tooltip"]').tooltip();

                // Popovers
                $('[data-toggle="popover"]').popover();

                // Page scroll animate
                new WOW().init();
            });

            $("document").ready(function () {
                $(".hero-carousel").owlCarousel({
                    items: 1,
                    nav: true,
                    navText: ["<span class='mai-chevron-back'></span>", "<span class='mai-chevron-forward'></span>"],
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 5000,
                });

                $(".team-carousel").owlCarousel({
                    margin: 16,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 2
                        },
                        800: {
                            items: 3
                        }
                    }
                })

                $(".testimonial-carousel").owlCarousel({
                    responsive: {
                        0: {
                            items: 1,
                            margin: 16
                        },
                        768: {
                            items: 2,
                            margin: 24
                        },
                        992: {
                            items: 3,
                            margin: 24
                        }
                    }
                });
            });


            var $grid = $('.grid');
            // $grid.isotope({
            //     // options
            //     itemSelector: '.grid-item',
            //     layoutMode: 'fitRows'
            // });

            $('.filterable-btn').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $(this).toggleClass('active').siblings().removeClass('active');
                $grid.isotope({ filter: filterValue });
            });


        }

        fun()

    }, [])

    const nosotros = [
        {
            nombre: 'David Ortiz',
            cargo: 'Desarrollador Front-End',
            img: "../assets/img/personal/1.png"
        },
        {
            nombre: 'Ronny Minda',
            cargo: 'Desarrollador Full-Stack',
            img: "../assets/img/personal/6.jpeg"
        },
        {
            nombre: 'Pedro Aguilar',
            cargo: 'Especialista en Marketing Digital',
            img: "../assets/img/personal/2.png"
        },
        {
            nombre: 'Laura Díaz',
            cargo: 'Especialista en Experiencia de Usuario (UX)',
            img: "../assets/img/personal/3.png"
        },
        {
            nombre: 'Andrés Pérez',
            cargo: 'Coordinador de Proyectos Web',
            img: "../assets/img/personal/4.png"
        },
        {
            nombre: 'Alejandro Flores',
            cargo: 'Analista de Seguridad Web',
            img: "../assets/img/personal/5.jpg"
        },

    ]

    return (
        <>

            <Head>
                <title>Mainalis - About</title>
            </Head>

            <div class="page-banner bg-img bg-img-parallax overlay-dark" style={{ backgroundImage: 'url(../assets/img/about.avif)' }}>
                <div class="container h-100">
                    <div class="row justify-content-center align-items-center h-100">
                        <div class="col-lg-8">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb breadcrumb-dark bg-transparent justify-content-center py-0">
                                    <li class="breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">About</li>
                                </ol>
                            </nav>
                            <h1 class="fg-white text-center">About</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div class="page-section">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 py-3">
                            <div class="subhead">Sobre Nosotros</div>
                            <h2 class="title-section">Somos <span class="fg-primary">Equipos Profesionales</span> para Hacer Crecer tu Negocio </h2>

                            <p>Hoy en día el correcto funcionamiento de una página web es fundamental para dar una imagen profesional y de confianza. Es por esto que no nos podemos permitir el lujo de que nuestra página web deje de funcionar por un problema de software o porque no se ha llevado a cabo un correcto mantenimiento web y actualización del sitio.</p>

                        </div>
                        <div class="col-lg-6 py-3">
                            <div class="about-img">
                                <img src="../assets/img/about.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="page-section">
                <div class="container">
                    <div class="text-center">
                        <div class="subhead">Nuestros Equipos</div>
                        <h2 class="title-section">El Equipo De Expertos En Mainalis</h2>
                    </div>

                    <div class="owl-carousel team-carousel mt-5" >

                        {
                            nosotros.map((i) => {
                                return (
                                    <div key={i.nombre} class="team-wrap">
                                        <div class="team-profile">
                                            <img src={i.img} alt="" style={{ height: '400px', objectFit: 'cover' }} />
                                        </div>
                                        <div class="team-content">
                                            <h5>{i.nombre}</h5>
                                            <div class="text-sm fg-grey">{i.cargo}</div>

                                            {/* <div class="social-button">
                                                <a href="#"><span class="mai-logo-facebook-messenger"></span></a>
                                                <a href="#"><span class="mai-call"></span></a>
                                                <a href="#"><span class="mai-mail"></span></a>
                                            </div> */}
                                        </div>
                                    </div>
                                )
                            })
                        }



                    </div>
                </div>
            </div>

            <div class="page-section">
                <div class="container-fluid">
                    <div class="row row-cols-md-3 row-cols-lg-5 justify-content-center text-center">
                        <div class="py-3 px-5">
                            <img src="../assets/img/clients/airbnb.png" alt="" />
                        </div>
                        <div class="py-3 px-5">
                            <img src="../assets/img/clients/google.png" alt="" />
                        </div>
                        <div class="py-3 px-5">
                            <img src="../assets/img/clients/mailchimp.png" alt="" />
                        </div>
                        <div class="py-3 px-5">
                            <img src="../assets/img/clients/paypal.png" alt="" />
                        </div>
                        <div class="py-3 px-5">
                            <img src="../assets/img/clients/stripe.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    )
}

export default About