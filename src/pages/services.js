import Footer from "@/components/footer";
import Layout from "@/components/layout"
import React, { useEffect } from 'react'
import Link from "next/link";
import Head from "next/head";

const Services = () => {

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

    const comentarios = [
        {
            nombre: 'Isabella Rodriguez',
            img: '../assets/img/person/1.jpg',
            coment: 'Super contento con el trabajo que han hecho en la realización de mi e commerce,  la han hecho exactamente como yo quería y han sabido  plasmar mis ideas a la perfección, sobre todo me gustaría realzar el trabajo de Ronny, donde siempre me ha ayudado en todo momento y se ha preocupado en que todo salga bien. La verdad que solo tengo buenas palabras, si alguien tiene dudas solo puedo decir que los recomiendo 100%.'
        },
        {
            nombre: 'Sofía García',
            img: '../assets/img/person/2.jpg',
            coment: 'Encargamos la realización de nuestra web a Ricardo y el resultado es mejor de lo esperado. Tras su propuesta inicial, se ha adaptado a cada cambio que le hemos pedido, demostrando una gran paciencia y profesionalidad que ha permitido que finalmente nos sintamos identificados con todo el contenido de la página. Muchas gracias por el trabajo realizado.'
        },
        {
            nombre: 'Maria Hernandez',
            img: '../assets/img/person/3.jpg',
            coment: 'Muy contenta con el trabajo realizado. Necesitaba una página web para promocionar mi negocio y han sabido plasmar mi imagen y valores a la perfección.En cuanto al trato, no puedo estar más contenta por la buena comunicación que hemos tenido. Han sido muy profesionales.'
        },
        {
            nombre: 'Miguel Mendoza',
            img: '../assets/img/person/4.jpg',
            coment: 'Mi experiencia sólo se puede calificar de EXCELENTE. A la primera supieron captar lo que quería y necesitaba para mi web. Me encanta el diseño que han realizado, la profesionalidad con la que lo están desarrollando todo el trabajo y lo formales que son en todo. Ricardo es muy accesible, y cada vez que he tenido una dura ahí han estado para resolverla. Estoy muy contenta con mi elección. Seguimos trabajando juntos y espero continuar.'
        },
        {
            nombre: 'Luisa Martinez.',
            img: '../assets/img/person/5.jpg',
            coment: 'No puedo estar más contento de haber encargado mi página web a Carlos y Ricardo. Llegué con dudas y malas experiencias previas y la verdad es que me han sorprendido por su dedicación, buena comunicación y con un resultado mucho mejor del esperado. Muy recomendables.'
        }
    ]

    return (
        <>

            <Head>
                <title>Mainalis - Services</title>
            </Head>

            <div class="page-banner bg-img bg-img-parallax overlay-dark" style={{ backgroundImage: 'url(../assets/img/services.avif)' }}>
                <div class="container h-100">
                    <div class="row justify-content-center align-items-center h-100">
                        <div class="col-lg-8">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb breadcrumb-dark bg-transparent justify-content-center py-0">
                                    <li class="breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">Services</li>
                                </ol>
                            </nav>
                            <h1 class="fg-white text-center">Services</h1>
                        </div>
                    </div>
                </div>
            </div>


            <div class="page-section">
                <div class="container">
                    <div class="text-center">
                        <div class="subhead">Nuestros Servicios</div>
                        <h2 class="title-section">Lo Que Manejamos En Nuestros Proyectos</h2>
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
                            <div class="text-center">
                                <div class="img-fluid mb-4">
                                    <img src="../assets/img/icons/web_development.svg" alt="" />
                                </div>
                                <h5>Desarrollo Web</h5>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
                            <div class="text-center">
                                <div class="img-fluid mb-4">
                                    <img src="../assets/img/icons/graphics_design.svg" alt="" />
                                </div>
                                <h5>Diseño Gráfico</h5>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
                            <div class="text-center">
                                <div class="img-fluid mb-4">
                                    <img src="../assets/img/icons/seo_and_marketing.svg" alt="" />
                                </div>
                                <h5>SEO & Marketing</h5>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
                            <div class="text-center">
                                <div class="img-fluid mb-4">
                                    <img src="../assets/img/icons/customer_services.svg" alt="" />
                                </div>
                                <h5>Servicios Al Cliente</h5>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
                            <div class="text-center">
                                <div class="img-fluid mb-4">
                                    <img src="../assets/img/icons/app_development.svg" alt="" />
                                </div>
                                <h5>Desarrollo De Aplicaciones</h5>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
                            <div class="text-center">
                                <div class="img-fluid mb-4">
                                    <img src="../assets/img/icons/ui_ux_design.svg" alt="" />
                                </div>
                                <h5>UI/UX Diseño</h5>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
                            <div class="text-center">
                                <div class="img-fluid mb-4">
                                    <img src="../assets/img/icons/product_design.svg" alt="" />
                                </div>
                                <h5>Diseño De Producto</h5>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
                            <div class="text-center">
                                <div class="img-fluid mb-4">
                                    <img src="../assets/img/icons/data_analyst.svg" alt="" />
                                </div>
                                <h5>Analista De Datos</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            <div class="page-section">
                <div class="container">
                    <div class="owl-carousel testimonial-carousel">


                        {
                            comentarios.map((i) => {

                                return (
                                    <div key={i.img} class="card-testimonial">
                                        <div class="content"> {i.coment} </div>
                                        <div class="author">
                                            <div class="avatar">
                                                <img src={i.img} alt="" style={{ objectFit: 'cover' }} />
                                            </div>
                                            <div class="d-inline-block ml-2">
                                                <div class="author-name"> {i.nombre} </div>
                                                <div class="author-info">CEO - Mosh Elite Ltd.</div>
                                            </div>
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

export default Services