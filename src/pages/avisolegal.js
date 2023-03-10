
import Footer from "@/components/footer";
import Layout from "@/components/layout"
import React, { useEffect } from 'react'
import Link from "next/link";
import Head from "next/head";

const Avisolegal = () => {

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

    return (
        <>

            <Head>
                <title>Mainalis - Avisolegal</title>
            </Head>

            <div class="page-banner bg-img bg-img-parallax overlay-dark" style={{ backgroundImage: 'url(../assets/img/bg_image_3.jpg)' }}>
                <div class="container h-100">
                    <div class="row justify-content-center align-items-center h-100">
                        <div class="col-lg-8">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb breadcrumb-dark bg-transparent justify-content-center py-0">
                                    <li class="breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">Aviso Legal</li>
                                </ol>
                            </nav>
                            <h1 class="fg-white text-center">Aviso Legal</h1>
                        </div>
                    </div>
                </div>
            </div>






            <div class="page-section">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col py-3">

                            <h2 class="title-section">AVISO LEGAL / POL??TICA DE PROTECCI??N DE DATOS</h2>

                            <p>1. En cumplimiento de la Ley 34/2002, de 11 de Julio, de Servicios de la Sociedad de la Informaci??n y de Comercio Electr??nico, le informamos de que HINIESTIC S.L U, con CIF B93090652, es titular de este sitio Web.</p>

                            <p>2. De conformidad con lo establecido en la Ley Org??nica 15/1999, de Protecci??n de Datos de Car??cter Personal, en caso de que nos env??e alg??n correo electr??nico a la direcci??n indicada en la misma, o rellene alg??n formulario de recogida de datos, le informamos de que los datos de car??cter personal que nos proporcione, ser??n registrados en el fichero del que es responsable HINIESTIC S.L.U, con la finalidad de gestionar su consulta mantener una relaci??n comercial, as?? como para el env??o por cualquier medio, incluso por correo electr??nico u otro medio de comunicaci??n electr??nica equivalente informaciones publicitarias o promocionales sobre los productos o servicios de la Empresa</p>

                            <p>3. Usted podr?? oponerse al tratamiento de sus datos con fines publicitarios y ejercitar los derechos de acceso, rectificaci??n, cancelaci??n y oposici??n, de conformidad con lo establecido en la legislaci??n vigente, mediante comunicaci??n escrita a la siguiente direcci??n de correo electr??nico info@hiniestic.com</p>

                            <p>4. HINIESTIC S.L.U, declara haber adoptado todas las medidas de seguridad necesarias y adecuadas a lo establecido en el Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la LOPD y ha establecido todos los medios t??cnicos a su alcance con la intenci??n de evitar la p??rdida, mal uso, alteraci??n, acceso no autorizado o robo de los datos que Vd. facilite.</p>

                            <p>5.Todos los contenidos incluidos en la P??gina Web y en particular las marcas, nombres comerciales, dise??os industriales, dise??os, textos, fotograf??as, gr??ficos, logotipos, iconos, software o cualesquiera otros signos susceptibles de utilizaci??n industrial y comercial est??n protegidos por derechos de propiedad industrial e intelectual de HINIESTIC S.L.U. Queda por lo tanto prohibida cualquier utilizaci??n, y/o reproducci??n de los mismos sin consentimiento expreso de la Empresa.</p>

                            <p>6. HINIESTIC S.L.U, no ser?? responsable de la infracci??n de los derechos de propiedad intelectual o industrial de terceros que pudieran derivarse de la inclusi??n en la P??gina Web de marcas, nombres comerciales, dise??os industriales, patentes, dise??os, textos, fotograf??as, gr??ficos, logotipos, iconos o software pertenecientes a terceros que hayan declarado ser titulares de los mismos al incluirlos en la P??gina Web.</p>

                            <p>7. El Usuario se obliga a usar los contenidos de la P??gina Web de forma diligente, correcta y l??cita y se compromete a abstenerse de:</p>

                            <p>a) Utilizar los contenidos con fines o efectos contrarios a la ley, a la moral y a las buenas costumbres o al orden p??blico.</p>

                            <p>b) Reproducir, copiar, distribuir, permitir el acceso del p??blico a trav??s de cualquier modalidad de comunicaci??n p??blica, transformar o modificar los contenidos, a menos que se cuente con la correspondiente autorizaci??n de su titular.</p>

                            <p>c) Utilizar los contenidos de la P??gina Web para remitir publicidad, comunicaciones con fines de venta directa o con cualquier otra clase de finalidad comercial, mensajes no solicitados dirigidos a una pluralidad de personas con independencia de su finalidad, as?? como a abstenerse de comercializar o divulgar de cualquier modo dicha informaci??n.</p>

                            <p>En caso de conflicto de cualquier ??ndole, ambas partes intentar??n llegar a un acuerdo pac??fico. No siendo posible, los Tribunales de M??LAGA tendr??n la competencia para conocer el caso, no siendo posible acudir a otro fuero para ejercitar la acci??n.</p>

                            <p>8. LOS USUARIOS QUE NO EST??N DE ACUERDO CON ESTA POL??TICA NO DEBEN INTRODUCIR NING??N DATO A TRAV??S DE ESTE SITIO WEB, NI ACCEDER AL CONTENIDO DE ESTA WEB.</p>

                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </>

    )
}

export default Avisolegal