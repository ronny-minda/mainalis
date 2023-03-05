import Footer from "@/components/footer"
import Head from "next/head"
import Link from "next/link"


export default function MyComponent() {

    const contenido = {
        titulo: 'Compañías de Internet ideales para potenciar tu nueva app',
        fecha: '30 Enero, 2022',
        img: '../assets/img/blog/compania-de-internet-ideales-para-potenciar-tu-nueva-app.jpg',
        user: 'Ronny Minda',
        categorias: [
            "Marketing digita",
            "Análisis de datos",
            "Experiencia del cliente",
            "Branding",
            "Tendencias de marketing",
            "Marketing offline",
            "Investigación de mercado",
            "Analítica web",
        ],
        tags: [
            "Compañías de Internet",
            "Empresas de tecnología",
            "Startups",
            "Aplicaciones móviles",
            "Marketing digital",
            "Desarrollo de aplicaciones",
            "Servicios en la nube",
            "Analítica web",
            "Redes sociales",
            "Publicidad en línea",
        ],
        conte: `
        
        <div class="entry-content">
        <p>Entre tantas <strong>compañías de Internet</strong> que puedes encontrar, es esencial que escojas la mejor o la más conveniente a tus necesidades. Al escoger la mejor podrías ahorrar una buena suma de dinero a la hora de pagar tu factura.</p>
    <p>El problema es, como ya dijimos, que puedes dar con una gran cantidad de empresas en el mercado que ofrecen diferentes tarifas. ¿Pero cuál es la mejor a elegir? No te preocupes, en este artículo te presentamos una de las mejores compañías de Internet; también te diremos dónde puedes obtener información sobre el resto de las compañías.</p>
    
    <h2><span class="ez-toc-section" id="Una_de_las_mejores_companias_de_Internet" ez-toc-data-id="#Una_de_las_mejores_companias_de_Internet"></span>Una de las mejores compañías de Internet<span class="ez-toc-section-end"></span></h2>
    <p>Una de las <strong>mejores compañías de Internet</strong> que puedes contratar es Vodafone España. A continuación encontrarás información respecto a sus planes y servicios, para que puedas tener un panorama exacto de cada una de ellos, sus alcances y limitaciones.</p>
    <h3><span class="ez-toc-section" id="Vodafone" ez-toc-data-id="#Vodafone"></span>Vodafone<span class="ez-toc-section-end"></span></h3>
    <p>Esta compañía cuenta con muy buenas ofertas móviles y de Internet, incluso puedes combinar ambos servicios. Por supuesto, las tarifas varían según las combinaciones que realices, el plan y servicio que hayas escogido. Pero para ser más específicos, en Vodafone podrás encontrar 3 ofertas diferentes:</p>
    <ol>
    <li><strong>Para la contratación de tarifas móviles</strong></li>
    </ol>
    <p>Puedes encontrar 4 opciones, y sus servicios y precios son los siguientes:</p>
    <ul>
    <li>La <strong>tarifa Mini</strong>, que te proporciona 4GB en datos y 200 minutos de llamadas por 19,99 euros al mes, sin permanencia.</li>
    <li>La <strong>tarifa Ilimitada</strong> tiene un precio de 32,99 euros al mes y no requiere permanencia.</li>
    <li>La <strong>tarifa Ilimitada Maxi</strong> tiene un precio de 21,99 euros al mes en promoción los primeros 6 meses, luego costará 36,99 euros.</li>
    <li>Y la <strong>Ilimitada Total</strong>, sin límite, con velocidad máxima 5G por 23,99 euros al mes los primeros 6 meses. Luego costará 49,99 euros y tendrás permanencia de un año.</li>
    </ul>
    <p>La tarifa Móvil Ilimitada incluye <em>roaming</em> en la UE, Reino Unido y Estados Unidos.</p>
    <ol>
    <li><strong>Para fibra óptica o ADSL</strong></li>
    </ol>
    <p>En este caso, podrás contar con 3 planes diferentes de 300 Mbps, 600 Mbps y 1 Gbps, con precios de 30.99, 42.99 y 55.99 euros al mes, respectivamente. Si no tienes la capacidad de soportar Internet de alta velocidad, puedes disponer de algunos planes ADSL.</p>
    <ol>
    <li><strong>O para combinar ambas: fibra óptica + tarifa móvil</strong></li>
    </ol>
    <p>Las líneas convergentes que pueden llegar a ofrecer algunas <strong>compañías de Internet </strong>te permiten contratar ofertas combinadas. Es decir, puedes conseguir planes que abarquen tanto el Internet para tu hogar como el de tu teléfono móvil y su línea.</p>
    <p>Hay desde 300 Mbps hasta 1 Gbps, todos de forma ilimitada por precios bastante buenos. Aunque los precios irán aumentando una vez se haya cumplido el plazo acordado según el plan, pues estos tienen diferentes condiciones para su contratación.</p>
    <p>En general, lo que más destaca de estos planes es la capacidad que tendrás de tener datos y llamadas ilimitadas, sin ningún tipo de restricción. Hay algunas otras empresas, como MásMóvil o Telco, que también pueden ofrecerte excelentes servicios.</p>
    <h2><span class="ez-toc-section" id="%C2%BFQuieres_mas_informacion_sobre_companias_de_Internet" ez-toc-data-id="#¿Quieres_mas_informacion_sobre_companias_de_Internet"></span>¿Quieres más información sobre compañías de Internet?<span class="ez-toc-section-end"></span></h2>
    
    <p>Si lo que buscas es ahorrar y aprovechar al máximo las tarifas que contrates, hay un sitio ideal para ti. De forma gratuita y sin ningún tipo de compromiso, puedes consultar y obtener mucha más información sobre <a href="https://www.zona-internet.com/">compañías de Internet</a> en este link que te dejamos.</p>
    <p>En pocos minutos, podrás encontrar las mejores tarifas para ti, así como también las mejores compañías del mercado. El mejor de los precios y el mejor de los servicios, todo eso y mucho más podrás encontrar al alcance de unos cuantos clics.</p>
                        </div>

        `,
    }

    return (
        <>

            <Head>
                <title>{contenido.titulo}</title>
            </Head>


            <div class="page-section pt-4">
                <div class="container">
                    <nav aria-label="Breadcrumb">
                        <ol class="breadcrumb bg-transparent mb-4">
                            <li class="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li class="breadcrumb-item"><Link href="/blog">Blog</Link></li>
                            <li class="breadcrumb-item active" aria-current="page"> {contenido.titulo} </li>
                        </ol>
                    </nav>
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="blog-single-wrap">
                                <div class="post-thumbnail">
                                    <img src={contenido.img} alt="" />
                                </div>
                                <h1 class="post-title"> {contenido.titulo} </h1>
                                <div class="post-meta">
                                    <div class="post-author">
                                        <span class="text-grey"> {contenido.user} </span>
                                    </div>
                                    <span class="gap">|</span>
                                    <div class="post-date">
                                        <a href="#"> {contenido.fecha} </a>
                                    </div>

                                </div>
                                <div class="post-content" dangerouslySetInnerHTML={{ __html: contenido.conte }}></div>

                                <div class="post-content">

                                    <div class="post-tags">
                                        <p class="mb-2">Tags:</p>
                                        {contenido.tags.map((i) => {
                                            return (
                                                <a class="tag-link" key={i} style={{ margin: '5px', cursor: 'pointer' }}>{i}</a>
                                            )
                                        })}
                                        {/* <a href="#" class="tag-link">LifeStyle</a>
                                        <a href="#" class="tag-link">Food</a>
                                        <a href="#" class="tag-link">Coronavirus</a> */}
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div class="col-lg-4">
                            <div class="widget">

                                <div class="widget-box">
                                    <h3 class="widget-title">Categorias</h3>
                                    <div class="divider"></div>
                                    <ul class="categories">
                                        {
                                            contenido.categorias.map((i) => {
                                                return (
                                                    <li key={i} ><a style={{ cursor: 'pointer' }}> {i} </a></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>

                                <div class="widget-box">
                                    <h3 class="widget-title">Blog Reciente</h3>
                                    <div class="divider"></div>
                                    <div class="blog-item">
                                        <div class="content">
                                            <h6 class="post-title"><Link href="/blog/contenido-video-ayudar-posicionamiento-web">Cómo el contenido en video puede ayudar en el posicionamiento web</Link></h6>
                                            <div class="meta">
                                                <a ><span class="mai-calendar"></span> 22 Enero, 2022 </a>
                                                <a ><span class="mai-person"></span> Ronny Minda </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="blog-item">
                                        <div class="content">
                                            <h6 class="post-title"><Link href="/blog/companias-internet-ideales-potenciar-nueva-app">Compañías de Internet ideales para potenciar tu nueva app</Link></h6>
                                            <div class="meta">
                                                <a ><span class="mai-calendar"></span> 30 Enero, 2022 </a>
                                                <a ><span class="mai-person"></span> Ronny Minda </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="blog-item">
                                        <div class="content">
                                            <h6 class="post-title"><Link href="/blog/claves-disenar-estrategia-marketing-cheques-regalo">8 claves para diseñar una estrategia de marketing de cheques de regalo</Link></h6>
                                            <div class="meta">
                                                <a ><span class="mai-calendar"></span> 10 Febre, 2022 </a>
                                                <a ><span class="mai-person"></span> Ronny Minda </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="widget-box">
                                    <h3 class="widget-title">Tag Cloud</h3>
                                    <div class="divider"></div>
                                    <div class="tagcloud">
                                        {contenido.tags.map((i) => {
                                            return (
                                                <a key={i} class="tag-cloud-link" style={{ cursor: 'pointer' }}>{i}</a>
                                            )
                                        })}
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}