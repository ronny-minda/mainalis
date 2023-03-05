import Image from 'next/image'
import { AnimatePresence, motion } from "framer-motion";
import Layout from '../components/layout'
import React, { useEffect, useState } from 'react'
import Footer from '@/components/footer';
import Link from 'next/link';
import Head from 'next/head';


export default function Home() {

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

  const proyects = [
    '../assets/img/portfolio/web/1.png',
    '../assets/img/portfolio/web/2.png',
    '../assets/img/portfolio/mobil/1.avif',
    '../assets/img/portfolio/mobil/2.avif',
    '../assets/img/portfolio/dashboard/1.png',
    '../assets/img/portfolio/dashboard/2.png',
  ]

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
  ]



  return (
    <>

      <Head>
        <title>Mainalis</title>
      </Head>


      <div class="page-banner home-banner mb-5">
        <div class="slider-wrapper">
          <div class="owl-carousel hero-carousel">
            <div class="hero-carousel-item">
              <img src="../assets/img/DesarrollamosPáginasWeb.jpg" alt=""></img>
              <div class="img-caption">
                <div class="subhead">Diseños Modernos</div>
                <h1 class="mb-4">Desarrollamos Tu Página Web</h1>
                {/* <a href="#services" class="btn btn-outline-light">Get Started</a> */}
              </div>
            </div>
            <div class="hero-carousel-item">
              <img src="../assets/img/bg_image_2.jpg" alt=""></img>
              <div class="img-caption">
                <div class="subhead">Preocúpate de lo importante,nosotros nos encargamos del resto</div>
                <h1 class="mb-4">Mantenimiento Web</h1>
                {/* <a href="#services" class="btn btn-outline-light">Get Started</a>
                <a href="#services" class="btn btn-primary">See Pricing</a> */}
              </div>
            </div>
            <div class="hero-carousel-item">
              <img src="../assets/img/bg_image_3.jpg" alt=""></img>
              <div class="img-caption">
                <div class="subhead">Mejora La Gestión De Tu Empresa</div>
                <h1 class="mb-4">Sistemas sobe medida para tu negocio</h1>
                {/* <a href="#services" class="btn btn-primary">Read More</a> */}
              </div>
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

              <Link href="/about" class="btn btn-primary mt-4">Leer más</Link>
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
          <div class="text-center">
            <div class="subhead">Nuestros Equipos</div>
            <h2 class="title-section">El Equipo De Expertos En Mainalis</h2>
          </div>

          <div class="owl-carousel team-carousel mt-5" >

            {
              nosotros.map((i) => {
                return (
                  <div class="team-wrap">
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
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 py-3">
              <div class="subhead">Portfolio</div>
              <h2 class="title-section">Nuestros últimos proyectos Explorar proyectos</h2>
            </div>
            <div class="col-md-6 py-3 text-md-right">
              <Link href="/projects" class="btn btn-outline-primary">Explorar Proyectos <span class="mai-arrow-forward ml-2"></span></Link>
            </div>
          </div>



          <div class="row mt-3">
            {
              proyects.map((i) => {
                return (
                  <div class="col-lg-4 py-3">
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
        </div>
      </div>




      <div class="page-section">
        <div class="container">
          <div class="owl-carousel testimonial-carousel">


            {
              comentarios.map((i) => {

                return (
                  <div class="card-testimonial">
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
        <div class="container">
          <div class="text-center">
            <div class="subhead">Blog</div>
            <h2 class="title-section">Lea nuestras últimas noticias</h2>
          </div>

          <div class="row my-5 card-blog-row">
            <div class="col-lg-3 py-3">
              <div class="card-blog">
                <div class="header">
                  <div class="entry-footer">
                    <div class="post-author">Ronny Minda</div>
                    <a href="#" class="post-date">23 Agost, 2022</a>
                  </div>
                </div>
                <div class="body">
                  <div class="post-title"><Link href="/blog/material-corporativo-potenciar-la-imagen-empresa">Material corporativo para potenciar la imagen de tu empresa</Link></div>
                </div>
                <div class="footer">
                  <Link href="/blog/material-corporativo-potenciar-la-imagen-empresa" >Leer mas<span class="mai-chevron-forward text-sm"></span></Link>
                </div>
              </div>
            </div>

            {
              cadaBlog.map((i) => {
                return (
                  <div class="col-lg-3 py-3">
                    <div class="card-blog">
                      <div class="header">
                        <div class="avatar">
                          <img style={{ objectFit: "cover" }} src={i.img} alt="" />
                        </div>
                        <div class="entry-footer">
                          <div class="post-author">{i.nombre}</div>
                          <a class="post-date">{i.fecha}</a>
                        </div>
                      </div>
                      <div class="body">
                        <div class="post-title"><Link href={i.link} >{i.titulo}</Link></div>

                      </div>
                      <div class="footer">
                        <Link href={i.link} >Leer mas<span class="mai-chevron-forward text-sm"></span></Link>
                      </div>
                    </div>
                  </div>
                )
              })
            }

            {/* <div class="col-lg-3 py-3">
              <div class="card-blog">
                <div class="header">
                  <div class="avatar">
                    <img src="../assets/img/person/person_1.jpg" alt="" />
                  </div>
                  <div class="entry-footer">
                    <div class="post-author">Sam Newman</div>
                    <a href="#" class="post-date">23 Apr 2020</a>
                  </div>
                </div>
                <div class="body">
                  <div class="post-title"><a href="blog-single.html">What is Business Management?</a></div>
                  <div class="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>
                <div class="footer">
                  <a href="blog-single.html">Read More <span class="mai-chevron-forward text-sm"></span></a>
                </div>
              </div>
              </div>
              <div class="col-lg-3 py-3">
                <div class="card-blog">
                  <div class="header">
                    <div class="avatar">
                      <img src="../assets/img/person/person_2.jpg" alt="" />
                    </div>
                    <div class="entry-footer">
                      <div class="post-author">Sam Newman</div>
                      <a href="#" class="post-date">23 Apr 2020</a>
                    </div>
                  </div>
                  <div class="body">
                    <div class="post-title"><a href="blog-single.html">What is Business Management?</a></div>
                    <div class="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                  </div>
                  <div class="footer">
                    <a href="blog-single.html">Read More <span class="mai-chevron-forward text-sm"></span></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 py-3">
                <div class="card-blog">
                  <div class="header">
                    <div class="avatar">
                      <img src="../assets/img/person/person_3.jpg" alt="" />
                    </div>
                    <div class="entry-footer">
                      <div class="post-author">Sam Newman</div>
                      <a href="#" class="post-date">23 Apr 2020</a>
                    </div>
                  </div>
                  <div class="body">
                    <div class="post-title"><a href="blog-single.html">What is Business Management?</a></div>
                    <div class="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                  </div>
                  <div class="footer">
                    <a href="blog-single.html">Read More <span class="mai-chevron-forward text-sm"></span></a>
                  </div>
                </div>
            </div> */}
          </div>

          <div class="text-center">
            <Link href="/blog" class="btn btn-primary">Ver mas</Link>
          </div>

        </div>
      </div>

      <div class="page-section">
        <div class="container">
          <div class="text-center">
            <h2 class="title-section mb-3">Mantente en contacto</h2>
            <p>Solo di hola o escríbenos. Puede enviarnos un correo electrónico manualmente a <a href="mailto:example@mail.com">example@mail.com</a></p>
          </div>
          <div class="row justify-content-center mt-5">
            <div class="col-lg-8">
              <form action="#" class="form-contact">
                <div class="row">
                  <div class="col-sm-6 py-2">
                    <label for="name" class="fg-grey">Nombre</label>
                    <input type="text" class="form-control" id="name" placeholder="Nombre.."></input>
                  </div>
                  <div class="col-sm-6 py-2">
                    <label for="email" class="fg-grey">Email</label>
                    <input type="text" class="form-control" id="email" placeholder="Email.."></input>
                  </div>
                  {/* <div class="col-12 py-2">
                    <label for="subject" class="fg-grey">Subject</label>
                    <input type="text" class="form-control" id="subject" placeholder="Subject.."></input>
                  </div> */}
                  <div class="col-12 py-2">
                    <label for="message" class="fg-grey">Mensaje</label>
                    <textarea id="message" rows="8" class="form-control" placeholder="Su mensaje.."></textarea>
                  </div>
                  <div class="col-12 mt-3">
                    <button type="submit" class="btn btn-primary px-5">Enviar</button>
                  </div>
                </div>
              </form>
            </div>
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
