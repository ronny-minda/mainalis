import Footer from "@/components/footer";
import Layout from "@/components/layout"
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import Head from "next/head";

const Projects = () => {

    const [item1, setItem1] = useState('activoo')
    const [item2, setItem2] = useState('')
    const [item3, setItem3] = useState('')
    const [item4, setItem4] = useState('')

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

    const web = [
        '../assets/img/portfolio/web/1.png',
        '../assets/img/portfolio/web/2.png',
        '../assets/img/portfolio/web/3.png',
        '../assets/img/portfolio/web/4.png',
        '../assets/img/portfolio/web/5.png',
        '../assets/img/portfolio/web/6.png',
        '../assets/img/portfolio/web/7.png',
        '../assets/img/portfolio/web/8.png',
        '../assets/img/portfolio/web/9.png',
        '../assets/img/portfolio/web/10.png',
    ]

    const mobile = [
        '../assets/img/portfolio/mobil/1.avif',
        '../assets/img/portfolio/mobil/2.avif',
        '../assets/img/portfolio/mobil/3.avif',
        '../assets/img/portfolio/mobil/4.avif',
        '../assets/img/portfolio/mobil/5.avif',
        '../assets/img/portfolio/mobil/6.avif',
        '../assets/img/portfolio/mobil/7.avif',
        '../assets/img/portfolio/mobil/8.avif',
        '../assets/img/portfolio/mobil/9.avif',
        '../assets/img/portfolio/mobil/10.avif',
    ]

    const dashboard = [
        '../assets/img/portfolio/dashboard/1.png',
        '../assets/img/portfolio/dashboard/2.png',
        '../assets/img/portfolio/dashboard/3.png',
        '../assets/img/portfolio/dashboard/4.png',
        '../assets/img/portfolio/dashboard/5.png',
    ]

    const use = (num) => {
        if (num == 1) {
            setItem1('activoo')
            setItem2('')
            setItem3('')
            setItem4('')
        }
        if (num == 2) {
            setItem1('')
            setItem2('activoo')
            setItem3('')
            setItem4('')
        }
        if (num == 3) {
            setItem1('')
            setItem2('')
            setItem3('activoo')
            setItem4('')
        }
        if (num == 4) {
            setItem1('')
            setItem2('')
            setItem3('')
            setItem4('activoo')
        }
    }

    return (
        <>

            <Head>
                <title>Mainalis - Projects</title>
            </Head>

            <div class="page-banner bg-img bg-img-parallax overlay-dark" style={{ backgroundImage: 'url(../assets/img/projects.avif)' }}>
                <div class="container h-100">
                    <div class="row justify-content-center align-items-center h-100">
                        <div class="col-lg-8">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb breadcrumb-dark bg-transparent justify-content-center py-0">
                                    <li class="breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">Portfolio</li>
                                </ol>
                            </nav>
                            <h1 class="fg-white text-center">Projects</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div class="page-section">
                <div class="container">
                    <div class="filterable-btn">
                        <button id={`${item1}`} class="btn" onClick={() => use(1)} data-filter="*">Todos</button>
                        <button id={`${item2}`} class="btn" onClick={() => use(2)} data-filter=".web">Website</button>
                        <button id={`${item3}`} class="btn" onClick={() => use(3)} data-filter=".mobile">Mobile</button>
                        <button id={`${item4}`} class="btn" onClick={() => use(4)} data-filter=".dashboard">Dashboard</button>
                    </div>

                    <div class="grid mt-3">

                        {
                            web.map((i) => {
                                return (
                                    <div key={i} class="grid-item web">
                                        <div class="portfolio">
                                            <a href={i} data-fancybox="portfolio">
                                                <img src={i} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        {
                            mobile.map((i) => {
                                return (
                                    <div key={i} class="grid-item mobile">
                                        <div class="portfolio">
                                            <a href={i} data-fancybox="portfolio">
                                                <img src={i} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        {
                            dashboard.map((i) => {
                                return (
                                    <div key={i} class="grid-item dashboard">
                                        <div class="portfolio">
                                            <a href={i} data-fancybox="portfolio">
                                                <img src={i} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    {/* <div class="mt-5 text-center">
                        <button class="btn btn-primary">Load More</button>
                    </div> */}
                </div>
            </div>

            <Footer />
        </>

    )
}

export default Projects