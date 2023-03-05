import Footer from "@/components/footer"
import Head from "next/head"
import Link from "next/link"

export default () => {

    const contenido = {
        titulo: '¿Cómo afecta el WPO al funcionamiento de tu web?',
        fecha: '18 dici, 2022',
        img: '../assets/img/blog/como-afecta-el-wpo-al-funcionamiento-de-tu-web.jpg',
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
            "WPO (Optimización del rendimiento web)",
            "Rendimiento web",
            "Velocidad de carga",
            "Optimización de imágenes",
            "Optimización de código",
            "SEO (Optimización de motores de búsqueda)",
            "Experiencia del usuario",
            "Diseño web",
            "Hosting web",
            "Navegadores web",
        ],
        conte: `
        
        <div class="entry-content">
        <p><span style="font-weight: 400;">¿Tu web tarda mucho en cargar?, ¿el número de visitas a tu portal es muy bajo?, ¿los usuarios abandonan tu página antes de ver el contenido que ofreces? La respuesta afirmativa a todas estas cuestiones significa que te urge hacer cambios importantes.</span></p>
    <p><span style="font-weight: 400;">El tiempo de carga es un aspecto sumamente valioso. A nadie le gusta esperar cuando está navegando por Internet. ¿Te gustaría ofrecer una excelente experiencia de usuario y que tus visitantes se queden contigo? En tal caso debes </span><b>prestar atención al WPO</b><span style="font-weight: 400;">.</span></p>
    <p><span style="font-weight: 400;">Seguidamente se explicará en qué consiste y </span><b>cómo afecta el WPO al funcionamiento de tu web</b><span style="font-weight: 400;">. Sigue leyendo y descubre todos los detalles.</span></p>
    
    <h2><span class="ez-toc-section" id="%C2%BFEn_que_consiste_el_WPO" ez-toc-data-id="#¿En_que_consiste_el_WPO"></span><b>¿En qué consiste el WPO?</b><span class="ez-toc-section-end"></span></h2>
    <p><span style="font-weight: 400;">El Web Performance Optimization consiste en una serie de acciones que deben ser ejecutadas por </span> <b>un especialista en WPO</b><span style="font-weight: 400;"> a fin de optimizar el rendimiento de una página web. A través de este proceso es posible analizar a profundidad los aspectos técnicos de cierta página.</span></p>
    <p><span style="font-weight: 400;">Durante el análisis se detectan los puntos débiles que afectan la velocidad de carga con la finalidad de poner en marcha diferentes acciones correctivas. El objetivo central del WPO consiste en identificar, comprobar y corregir todos los elementos que alteran la rapidez de tu portal.</span></p>
    <p><span style="font-weight: 400;">Ahora bien, </span><b>¿es realmente importante el WPO?</b><span style="font-weight: 400;"> La respuesta a esta pregunta definitivamente es </span><b>sí</b><span style="font-weight: 400;">. Conseguir las mejores posiciones en los buscadores no es producto de la casualidad sino de aplicar un conjunto de estrategias bien pensadas. Por supuesto, en estas se incluyen las relacionadas a la optimización de rendimiento.</span></p>
    <p><span style="font-weight: 400;">Si quieres subir al siguiente nivel y competir con los grandes debes hacer que tu página sea funcional y rápida. Si todavía no estás muy convencido continúa la lectura.</span></p>
    <h3><span class="ez-toc-section" id="Ventajas_del_WPO" ez-toc-data-id="#Ventajas_del_WPO"></span><b>Ventajas del WPO</b><span class="ez-toc-section-end"></span></h3>
    <p><span style="font-weight: 400;">Mejorar el WPO de una web </span><b>ofrece múltiples beneficios</b><span style="font-weight: 400;">, algunos de los más destacados son:</span></p>
    <ul>
    <li style="font-weight: 400;" aria-level="1"><b>Escalar a las posiciones más altas de los buscadores</b><span style="font-weight: 400;">. Una web lenta equivale al fracaso en lo que respecta al SEO. Al mejorar la velocidad de carga automáticamente se produce un aumento importante en el posicionamiento orgánico. Los bots de google rastrean con mayor eficacia un site optimizado.</span></li>
    <li style="font-weight: 400;" aria-level="1"><b>Incrementar las posibilidades de conversión</b><span style="font-weight: 400;">. Lo que se busca es que el visitante deje de ser una simple persona online para convertirse en un lead, cliente o fan. Atraer al tráfico cualificado.</span></li>
    <li style="font-weight: 400;" aria-level="1"><b>Disminuir considerablemente la tasa de rebote</b><span style="font-weight: 400;">. En otras palabras, evitar que los usuarios abandonen el portal sin interactuar con el mismo.</span></li>
    <li style="font-weight: 400;" aria-level="1"><b>Ofrecer una experiencia de usuario satisfactoria</b><span style="font-weight: 400;">. Si el internauta está contento seguramente volverá.</span></li>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Una página optimizada es capaz de </span><b>promover la identidad de una marca</b><span style="font-weight: 400;">, proyectar la mejor imagen corporativa, demostrar que inviertes y apuestas por la mejora de tu negocio.</span></li>
    <li style="font-weight: 400;" aria-level="1"><b>Simplificar los costes en recursos de servidor</b><span style="font-weight: 400;">. La optimización de contenidos te permitirá contar con archivos e imágenes menos pesadas. Podrás optar por un plan más asequible.</span></li>
    </ul>
    <h2><span class="ez-toc-section" id="Importancia_de_la_velocidad_de_carga" ez-toc-data-id="#Importancia_de_la_velocidad_de_carga"></span><b>Importancia de la velocidad de carga</b><span class="ez-toc-section-end"></span></h2>
    <p><span style="font-weight: 400;">Las estadísticas demuestran que un gran porcentaje de usuarios abandonan una página si tarda más de 3 segundos en cargar. Esto deja claro que </span><b>la velocidad de carga sí importa</b><span style="font-weight: 400;">. Para sobresalir, resulta imprescindible hacer un buen trabajo de optimización.</span></p>
    <p><span style="font-weight: 400;">En este punto seguramente te preguntes </span><b>cómo puedes saber que tu web es lenta.</b><span style="font-weight: 400;"> Una herramienta de medición muy eficaz para conocer el tiempo de carga es </span><span style="font-weight: 400;">PageSpeed</span><span style="font-weight: 400;">. Esta se encarga de evaluar no solo la velocidad sino también de ofrecer información relevante y sugerencias prácticas para mejorar los resultados.</span></p>
    <p><span style="font-weight: 400;">Identificar las debilidades es el primer paso hacia el cambio. Recuerda que </span><b>la rapidez de tu portal ha pasado a ser un factor determinante</b><span style="font-weight: 400;"> que afecta el SEO, la tasa de conversión, el ROI y la experiencia de usuario. Y esta velocidad ha de ser igual tanto para móviles como para ordenadores.</span></p>
    <h2><span class="ez-toc-section" id="Las_principales_tecnicas_de_WPO" ez-toc-data-id="#Las_principales_tecnicas_de_WPO"></span><b>Las principales técnicas de WPO</b><span class="ez-toc-section-end"></span></h2>
    <p><span style="font-weight: 400;">Una vez que se han identificado los puntos débiles que están ralentizando tu sitio web es sumamente importante aplicar las técnicas de WPO más efectivas para cambiar el panorama. Si no eres experto en la materia, la asistencia de un profesional te vendría bien.</span></p>
    <p><span style="font-weight: 400;">Estas son solo algunas de </span><b>las técnicas que se aplican para minimizar el tiempo excesivo de carga</b><span style="font-weight: 400;">:</span></p>
    <ul>
    <li style="font-weight: 400;" aria-level="1"><b>Técnicas en el servidor web</b><span style="font-weight: 400;">: Permiten, entre otras cosas, elegir servicios de alojamiento de calidad, optimizar los recursos del hosting, mejorar las características del procesador del servidor, usar distintos sistemas de caché, protegerte contra ataques DDS y el </span><i><span style="font-weight: 400;">hotlinking</span></i><span style="font-weight: 400;">.</span></li>
    <li style="font-weight: 400;" aria-level="1"><b>Técnicas de mejora de carga relacionadas al diseño del portal</b><span style="font-weight: 400;">: Contribuyen a cambiar el aspecto del portal, evitar el abuso de elementos, seleccionar el formato correcto, generar versiones responsive, optimizar el tamaño de los contenidos o añadir diseños más ligeros.</span></li>
    <li style="font-weight: 400;" aria-level="1"><b>Técnicas WPO en el propio sistema web</b><span style="font-weight: 400;">: Se enfocan en hacer un buen uso de los plugins, configurar correctamente las imágenes, mostrar extractos de textos, alojar los archivos multimedia en otras plataformas externas, comprimir los códigos y propiciar el uso de un óptimo gestor de contenidos.</span></li>
    </ul>
    <p><span style="font-weight: 400;">&nbsp;</span></p>
    
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
                                                <a class="tag-link" style={{ margin: '5px', cursor: 'pointer' }}>{i}</a>
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
                                                    <li><a style={{ cursor: 'pointer' }}> {i} </a></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>

                                <div class="widget-box">
                                    <h3 class="widget-title">Blog reciente</h3>
                                    <div class="divider"></div>
                                    <div class="blog-item">
                                        <div class="content">
                                            <h6 class="post-title"><a href="#">Even the all-powerful Pointing has no control</a></h6>
                                            <div class="meta">
                                                <a href="#"><span class="mai-calendar"></span> July 12, 2018</a>
                                                <a href="#"><span class="mai-person"></span> Admin</a>
                                                <a href="#"><span class="mai-chatbubbles"></span> 19</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="blog-item">
                                        <div class="content">
                                            <h6 class="post-title"><a href="#">Even the all-powerful Pointing has no control</a></h6>
                                            <div class="meta">
                                                <a href="#"><span class="mai-calendar"></span> July 12, 2018</a>
                                                <a href="#"><span class="mai-person"></span> Admin</a>
                                                <a href="#"><span class="mai-chatbubbles"></span> 19</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="blog-item">
                                        <div class="content">
                                            <h6 class="post-title"><a href="#">Even the all-powerful Pointing has no control</a></h6>
                                            <div class="meta">
                                                <a href="#"><span class="mai-calendar"></span> July 12, 2018</a>
                                                <a href="#"><span class="mai-person"></span> Admin</a>
                                                <a href="#"><span class="mai-chatbubbles"></span> 19</a>
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
                                                <a class="tag-cloud-link" style={{ cursor: 'pointer' }}>{i}</a>
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