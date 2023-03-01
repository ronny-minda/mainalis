import { useRouter } from 'next/router'
import Head from "next/head"
import React, { useEffect, useState } from 'react'







const Layout = ({ children }) => {

    useEffect(() => {


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



    }, [])


    return (
        <>
            <Head>

                <meta charset="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

                <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>

                <title>Mainalis</title>

                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />






            </Head>

            <header>
                <div class="top-bar">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-8">
                                <div class="d-inline-block">
                                    <span class="mai-mail fg-primary"></span> <a href="mailto:contact@mail.com">contact@mail.com</a>
                                </div>
                                <div class="d-inline-block ml-2">
                                    <span class="mai-call fg-primary"></span> <a href="tel:+0011223495">+0011223495</a>
                                </div>
                            </div>
                            <div class="col-md-4 text-right d-none d-md-block">
                                <div class="social-mini-button">
                                    <a href="#"><span class="mai-logo-facebook-f"></span></a>
                                    <a href="#"><span class="mai-logo-twitter"></span></a>
                                    <a href="#"><span class="mai-logo-youtube"></span></a>
                                    <a href="#"><span class="mai-logo-linkedin"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container">
                        <a href="index.html" class="navbar-brand">Reve<span class="text-primary">Tive.</span></a>

                        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="navbar-collapse collapse" id="navbarContent">
                            <ul class="navbar-nav ml-auto pt-3 pt-lg-0">
                                <li class="nav-item active">
                                    <a href="index.html" class="nav-link">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a href="about.html" class="nav-link">About</a>
                                </li>
                                <li class="nav-item">
                                    <a href="services.html" class="nav-link">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a href="portfolio.html" class="nav-link">Projects</a>
                                </li>
                                <li class="nav-item">
                                    <a href="blog.html" class="nav-link">News</a>
                                </li>
                                <li class="nav-item">
                                    <a href="contact.html" class="nav-link">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div class="page-banner home-banner mb-5">
                    <div class="slider-wrapper">
                        <div class="owl-carousel hero-carousel">
                            <div class="hero-carousel-item">
                                <img src="../assets/img/bg_image_1.jpg" alt=""></img>
                                <div class="img-caption">
                                    <div class="subhead">We're design studio believe in ideas</div>
                                    <h1 class="mb-4">Creative Design</h1>
                                    <a href="#services" class="btn btn-outline-light">Get Started</a>
                                </div>
                            </div>
                            <div class="hero-carousel-item">
                                <img src="../assets/img/bg_image_2.jpg" alt=""></img>
                                <div class="img-caption">
                                    <h1 class="mb-4">We combine Design, Thinking, and Technical</h1>
                                    <a href="#services" class="btn btn-outline-light">Get Started</a>
                                    <a href="#services" class="btn btn-primary">See Pricing</a>
                                </div>
                            </div>
                            <div class="hero-carousel-item">
                                <img src="../assets/img/bg_image_3.jpg" alt=""></img>
                                <div class="img-caption">
                                    <div class="subhead">Easy way to build perfect website</div>
                                    <h1 class="mb-4">Beautify handcrafted templates for your website</h1>
                                    <a href="#services" class="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                {children}
            </main>

            <footer class="page-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 py-3">
                            <h3>Reve<span class="fg-primary">Tive.</span></h3>
                        </div>
                        <div class="col-lg-3 py-3">
                            <h5>Contact Information</h5>
                            <p>301 The Greenhouse, Custard Factory, London, E2 8DY.</p>
                            <p>Email: example@mail.com</p>
                            <p>Phone: +00 112323980</p>
                        </div>
                        <div class="col-lg-3 py-3">
                            <h5>Company</h5>
                            <ul class="footer-menu">
                                <li><a href="#">Career</a></li>
                                <li><a href="#">Resources</a></li>
                                <li><a href="#">News & Feed</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 py-3">
                            <h5>Newsletter</h5>
                            <form action="#">
                                <input type="text" class="form-control" placeholder="Enter your email"></input>
                                <button type="submit" class="btn btn-primary btn-sm mt-2">Submit</button>
                            </form>
                        </div>
                    </div>

                    <hr></hr>

                    <div class="row mt-4">
                        <div class="col-md-6">
                            <p>Copyright 2020. This template designed by <a href="https://macodeid.com">MACode ID</a></p>
                        </div>
                        <div class="col-md-6 text-right">
                            <div class="sosmed-button">
                                <a href="#"><span class="mai-logo-facebook-f"></span></a>
                                <a href="#"><span class="mai-logo-twitter"></span></a>
                                <a href="#"><span class="mai-logo-youtube"></span></a>
                                <a href="#"><span class="mai-logo-linkedin"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>







        </>
    )
}

export default Layout 