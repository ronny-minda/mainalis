import Footer from "@/components/footer";
import Layout from "@/components/layout"
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import Head from "next/head";
import axios from "axios";


const Contact = () => {

    const [data, setData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    })

    const [enviado, setEnviado] = useState(false)

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
            $grid.isotope({
                // options
                itemSelector: '.grid-item',
                layoutMode: 'fitRows'
            });

            $('.filterable-btn').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $(this).toggleClass('active').siblings().removeClass('active');
                $grid.isotope({ filter: filterValue });
            });


        }

        fun()

    }, [])

    const inptus = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const envio = async (e) => {
        e.preventDefault()
        console.log('envio')

        await axios.post('http://localhost:3000/api/hello', data)
            .then((e) => {
                console.log(e.data)

                setData({
                    nombre: '',
                    email: '',
                    mensaje: ''
                })

                setEnviado(true)

                setTimeout(() => {
                    setEnviado(false)
                }, 3000);
            })
            .catch(() => {
                console.log('El error')
                console.log(e)
            })

    }


    return (
        <>
            <Head>
                <title>Mainalis - Contact</title>
            </Head>

            <div class="page-banner bg-img bg-img-parallax overlay-dark" style={{ backgroundImage: 'url(../assets/img/contact.avif)' }}>
                <div class="container h-100">
                    <div class="row justify-content-center align-items-center h-100">
                        <div class="col-lg-8">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb breadcrumb-dark bg-transparent justify-content-center py-0">
                                    <li class="breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">Contact</li>
                                </ol>
                            </nav>
                            <h1 class="fg-white text-center">Contact</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-section">
                <div class="container">
                    <div class="text-center">
                        <h2 class="title-section mb-3">Mantente en contacto</h2>
                        <p>Solo di hola o escríbenos. Puede enviarnos un correo electrónico manualmente a <a href="mailto:example@mail.com">example@mail.com</a></p>
                    </div>
                    <div class="row justify-content-center mt-5">-
                        <div class="col-lg-8">
                            <form class="form-contact" onSubmit={(e) => envio(e)}>

                                <div class="row">
                                    <div class="col-sm-6 py-2">
                                        <label for="nombre" class="fg-grey">Nombre</label>
                                        <input type="text" class="form-control" name='nombre' id="nombre" placeholder="Nombre..." value={data.nombre} onChange={(e) => inptus(e)} />
                                    </div>
                                    <div class="col-sm-6 py-2">
                                        <label for="email" class="fg-grey">Email</label>
                                        <input type="text" class="form-control" name='email' id="email" placeholder="Email..." value={data.email} onChange={(e) => inptus(e)} />
                                    </div>

                                    <div class="col-12 py-2">
                                        <label for="mensaje" class="fg-grey">Mensaje</label>
                                        <textarea name='mensaje' id="mensaje" rows="8" class="form-control" placeholder="Mensaje..." value={data.mensaje} onChange={(e) => inptus(e)} ></textarea>
                                    </div>
                                </div>

                                {
                                    enviado && <div style={{ color: '#3be059', fontWeight: 'bold', fontSize: '20px', textAlign: 'center' }} >Correo Enviado</div>
                                }

                                <div class="col-12 mt-3">
                                    <button type="submit" class="btn btn-primary px-5">Enviar</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div >

            <div class="maps-container" style={{ marginBottom: '30px' }}>
                <div id="google-maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31895.74793924602!2d-79.95576041322056!3d-2.165689763778243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d726bda5f0f47%3A0x7815737f981131bc!2sLos%20Ceibos%2C%20Guayaquil!5e0!3m2!1ses!2sec!4v1678030716050!5m2!1ses!2sec" width="100%" height="100%" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <Footer />
        </>

    )
}

export default Contact