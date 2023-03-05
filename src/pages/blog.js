import Footer from "@/components/footer";
import Layout from "@/components/layout"
import React, { useEffect } from 'react'
import Link from "next/link";
import Head from "next/head";

const Blog = () => {

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

    const cadaBlog = [
        {
            nombre: "Ronny Minda",
            fecha: "18 dici, 2022",
            img: "../assets/img/personal/6.jpeg",
            titulo: "¿Cómo afecta el WPO al funcionamiento de tu web?",
            msg: "msg",
            link: "/blog/afecta-wpo-al-funcionamiento-web",
        },
        {
            nombre: "Ronny Minda",
            fecha: "29 Novi, 2022",
            img: "../assets/img/personal/6.jpeg",
            titulo: "Las aplicaciones móviles que todos los autónomos y emprendedores necesitan",
            msg: "msg",
            link: "/blog/aplicaciones-moviles-autonomos-emprendedores-necesitan",
        },
        {
            nombre: "Ronny Minda",
            fecha: "10 Febre, 2022",
            img: "../assets/img/personal/6.jpeg",
            titulo: "8 claves para diseñar una estrategia de marketing de cheques de regalo",
            msg: "msg",
            link: "/blog/claves-disenar-estrategia-marketing-cheques-regalo",
        },
        {
            nombre: "Ronny Minda",
            fecha: "30 Enero, 2022",
            img: "../assets/img/personal/6.jpeg",
            titulo: "Compañías de Internet ideales para potenciar tu nueva app",
            msg: "msg",
            link: "/blog/companias-internet-ideales-potenciar-nueva-app",
        },
        {
            nombre: "Ronny Minda",
            fecha: "22 Enero, 2022",
            img: "../assets/img/personal/6.jpeg",
            titulo: "Cómo el contenido en video puede ayudar en el posicionamiento web",
            msg: "msg",
            link: "/blog/contenido-video-ayudar-posicionamiento-web",
        },
        {
            nombre: "Ronny Minda",
            fecha: "8 Septi, 2022",
            img: "../assets/img/personal/6.jpeg",
            titulo: "Elementos visuales en tu marca: 5 razones de importancia que no sabías",
            msg: "msg",
            link: "/blog/elementos-visuales-marca-5-razones-importancia",
        },
        {
            nombre: "Ronny Minda",
            fecha: "19 Marz, 2022",
            img: "../assets/img/personal/6.jpeg",
            titulo: "E-mail marketing: gestionar de manera eficiente el contacto con los clientes",
            msg: "msg",
            link: "/blog/email-marketing-gestionar-clientes",
        },
        {
            nombre: "Ronny Minda",
            fecha: "9 Septi, 2022",
            img: "../assets/img/personal/6.jpeg",
            titulo: "5 factores importantes en el HTML de tu web para el SEO",
            msg: "msg",
            link: "/blog/factores-importantes-html-seo",
        },
        {
            nombre: "Ronny Minda",
            fecha: "23 Agost, 2022",
            img: "../assets/img/personal/6.jpeg",
            titulo: "Material corporativo para potenciar la imagen de tu empresa",
            msg: "msg",
            link: "/blog/material-corporativo-potenciar-la-imagen-empresa",
        },
        {
            nombre: "Ronny Minda",
            fecha: "15 mayo, 2022",
            img: "../assets/img/personal/6.jpeg",
            titulo: "¿Cuál de los 2 da mejores resultados: PPC o SEO?",
            msg: "msg",
            link: "/blog/mejor-resultado-ppc-seo",
        },
        {
            nombre: "Ronny Minda",
            fecha: "12 marzo, 2022",
            img: "../assets/img/personal/6.jpeg",
            titulo: "6 métricas a tener en cuenta en una campaña de email marketing",
            msg: "msg",
            link: "/blog/metricas-campana-email-marketing",
        },
        {
            nombre: "Ronny Minda",
            fecha: "28 marzo, 2022",
            img: "../assets/img/personal/6.jpeg",
            titulo: "SEO LOCAL",
            msg: "msg",
            link: "/blog/seo-local",
        },
        {
            nombre: "Ronny Minda",
            fecha: "23 abri, 2022",
            img: "../assets/img/personal/6.jpeg",
            titulo: "¿Conoces la técnica ASO? Técnicas imprescindibles de SEO para apps",
            msg: "msg",
            link: "/blog/tecnica-aso-seo-apps",
        },
    ]

    return (
        <>

            <Head>
                <title>Mainalis - Blog</title>
            </Head>

            <div class="page-banner bg-img bg-img-parallax overlay-dark" style={{ backgroundImage: 'url(../assets/img/blog.avif)' }}>
                <div class="container h-100">
                    <div class="row justify-content-center align-items-center h-100">
                        <div class="col-lg-8">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb breadcrumb-dark bg-transparent justify-content-center py-0">
                                    <li class="breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">Blog</li>
                                </ol>
                            </nav>
                            <h1 class="fg-white text-center">Blog</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div class="page-section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-10">
                            <div class="row">



                                {
                                    cadaBlog.map((i) => {
                                        return (
                                            <div class="col-md-6 col-lg-4 py-3">
                                                <div class="card-blog">
                                                    <div class="header">
                                                        <div class="avatar">
                                                            <img src={i.img} alt="" style={{ objectFit: 'cover' }} />
                                                        </div>
                                                        <div class="entry-footer">
                                                            <div class="post-author">{i.nombre}</div>
                                                            <a class="post-date">{i.fecha}</a>
                                                        </div>
                                                    </div>
                                                    <div class="body">
                                                        <div class="post-title"><Link href={i.link}>{i.titulo}</Link></div>
                                                        <div class="post-excerpt">{i.msg}</div>
                                                    </div>
                                                    <div class="footer">
                                                        <Link href={i.link}>Leer Mas <span class="mai-chevron-forward text-sm"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }



                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </>

    )
}

export default Blog