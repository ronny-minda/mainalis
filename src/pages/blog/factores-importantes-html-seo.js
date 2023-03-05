import Footer from "@/components/footer"
import Head from "next/head"
import Link from "next/link"


export default () => {

    const contenido = {
        titulo: '5 factores importantes en el HTML de tu web para el SEO',
        fecha: '9 Septi, 2022',
        img: '../assets/img/blog/5-factores-importantes-en-el-html-de-tu-web-para-el-seo-980x572.jpg',
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
            "SEO (Optimización para motores de búsqueda)",
            "Etiquetas de título",
            "Descripciones meta",
            "URL amigables",
            "Palabras clave",
            "Texto alternativo de la imagen",
            "Estructura del sitio web",
            "Optimización móvil",
        ],
        conte: `
      
        <div class="entry-content">
    <p>El mundo del SEO se expande hacia muchas áreas, sabes que puedes aplicar optimizaciones simples como añadir palabras clave en tus títulos y URL, pero también existen&nbsp;<strong>factores importantes en el HTML de tu&nbsp;web</strong>&nbsp;que pueden afectar positivamente tu posicionamiento. Puede que al principio tengas un poco de dudas o hasta miedo de modificar la estructura de tu sitio, pero verás que con algunos retoques aquí y allá estarás compitiendo en los primeros puestos.</p>
<p>Por otro lado, también puede que te estés preguntando ¿no es necesario ser desarrollador o programador para modificar esos factores? La respuesta es no, no es necesario. La verdad es que la mayoría de esas modificaciones son&nbsp;<strong>etiquetas que pueden ser añadidas al código sin muchos protocolos</strong>, pero ese simple cambio puede hacer la diferencia en las SERP’s. Sigue leyendo y conoce cómo hacerlo.</p>

<h2><span class="ez-toc-section" id="%C2%BFQue_es_el_SEO_en_HTML_y_por_que_es_importante" ez-toc-data-id="#¿Que_es_el_SEO_en_HTML_y_por_que_es_importante"></span>¿Qué es el SEO en HTML y por qué es importante?<span class="ez-toc-section-end"></span></h2>

<p>Para empezar, recuerda el significado de las siglas SEO, “optimización para motores de búsqueda”, ¿y qué son los motores de búsqueda? herramientas de consulta constituidas por algoritmos. Los algoritmos se comunican con códigos y es allí donde el HTML cumple su función, para darle a entender al buscador que tienes una&nbsp;<strong>web</strong>&nbsp;perfecta, sin defectos de navegación y lista&nbsp;<strong>para complacer todas las consultas de tu audiencia</strong>, por tanto, te espera un&nbsp;posicionamiento web&nbsp;genial en la página de resultados.</p>
<p>Pero, si el código no tiene una buena estructura o peor aún, no cuenta con los protocolos de navegación necesarios, puede que el algoritmo te posicione en los últimos lugares. Aun así, existen&nbsp;<strong>muchos métodos SEO que pueden ayudar al algoritmo a entender cómo funciona tu página</strong>. Por ejemplo, con las etiquetas es posible indicarle al robot algo como “mira, esto es un enlace”, parece tonto, pero esta simple acción puede provocar un gran impacto.</p>
<p>Primero, porque estarás reduciendo el tiempo de indexación, ya que el crawler no tendrá la necesidad de analizar qué es lo que está viendo (por ejemplo, un enlace) sino que ya le estás avisando qué es y es más fácil para él ordenarlo. Pero, no lo subestimes, este algoritmo es más avanzado de lo que piensas, él solo quiere reducir tiempo. En segundo lugar, recuerda que&nbsp;<strong>Google dispone de un presupuesto limitado para la evaluación</strong>, por lo que mientras más rápida sea menos presupuesto consume y todo tu sitio&nbsp;<strong>web</strong>&nbsp;podrá ser indexado sin problemas.</p>
<h2><span class="ez-toc-section" id="Factores_importantes_para_el_SEO_en_el_HTML_de_tu_web" ez-toc-data-id="#Factores_importantes_para_el_SEO_en_el_HTML_de_tu_web"></span>Factores importantes para el SEO en el HTML de tu&nbsp;<strong>web</strong><span class="ez-toc-section-end"></span></h2>
<p>Puede que no estés familiarizado con los códigos, y está bien, no tienes que ser un experto al respecto. Pero, es necesario que te quites todas las dudas y ese miedo a tocar el HTML, porque&nbsp;<strong>solo así podrás aprovechar todas las ventajas del SEO</strong>. Aparte, muchos gestores de contenido (como WordPress) te permitirán hacer todas estas modificaciones en un editor amigable, donde podrás visualizar en tiempo real los cambios producidos y cómo se verían antes de publicar.</p>
<p>Ahora bien, esos cambios que llevarás a cabo tienen que ver con factores importantes, aquí te dejamos varios de los que necesitas optimizar para el posicionamiento&nbsp;<strong>web</strong>&nbsp;y cómo hacerlo&nbsp;<strong>corre</strong>ctamente.</p>
<h3><span class="ez-toc-section" id="Introduce_palabras_clave_en_el_codigo" ez-toc-data-id="#Introduce_palabras_clave_en_el_codigo"></span>Introduce palabras clave en el código<span class="ez-toc-section-end"></span></h3>
<p>A estas alturas es posible que ya sepas que las palabras clave son importantes para tus contenidos, debes integrarlas en el texto, el título y la URL. En fin, son necesarias e indispensables cuando se habla de SEO y casi cualquier tipo de optimización en Internet. Puede que parte de tu&nbsp;<strong>código HTML ya contenga algunos indicios de estrategias para posicionar</strong>, pero es tiempo de que sepas cómo y dónde utilizarlas para aprovechar sus beneficios.</p>
<ul>
<li>Escríbelas en los metadatos, son básicamente el título, la URL y la descripción que se muestran en las SERP’s.</li>
<li>Destácalas o inclúyelas en los subtítulos de tu contenido, pero sin exagerar, también puedes utilizar palabras clave relacionadas.</li>
<li>El&nbsp;<strong>nombre de los archivos&nbsp;deben contener las keywords</strong>, por ejemplo, el nombre de las imágenes, recuerda separarlas con un guión y añadir una pequeña descripción relacionada en el texto alternativo.</li>
<li>Los enlaces o vínculos que incluyas en el contenido también deben contener las keywords o al menos palabras relacionadas. Optimiza también el anchor text, pero que estén dispuestas de forma natural.</li>
<li>Emplea los&nbsp;<strong>plurales y sinónimos de tus palabras clave en el texto</strong>, recuerda que debe existir una proporción equilibrada de repeticiones.</li>
</ul>
<h3><span class="ez-toc-section" id="Optimiza_las_etiquetas_HTML_%C2%BFcuales_usar_para_el_SEO" ez-toc-data-id="#Optimiza_las_etiquetas_HTML_¿cuales_usar_para_el_SEO"></span>Optimiza las etiquetas HTML ¿cuáles usar para el SEO?<span class="ez-toc-section-end"></span></h3>

<p>Ahora bien,&nbsp;<strong>otro factor que no debes olvidar son las etiquetas</strong>, ya has leído varias referencias sobre ellas más arriba, pero ¿qué son realmente las etiquetas? Son pequeños fragmentos de código que suelen estar entre corchetes angulares, que describen la forma o la acción que tendrá el texto. Usualmente, se escriben al principio y al final de la palabra o frase a destacar, aunque el fragmento final puede contener un “/” entre los corchetes para indicar que hasta allí llegará la acción.</p>
<p>Si observas con cuidado el código HTML de tu sitio, verás que la estructura se compone de&nbsp;<em>,&nbsp;,&nbsp;</em>, entre otros, estas son las etiquetas, aunque universalmente se representan como&nbsp;<em>&lt;/&gt;</em>. Todas indican la jerarquización del código y son indispensables para el funcionamiento del mismo, pero&nbsp;<strong>cuando hablamos de SEO solo algunas de ellas bastarán para la optimización</strong>.</p>
<p>También es importante que sepas que puedes utilizar plugins en tu gestor de contenidos para implementar los cambios en estas etiquetas sin tener que hacerlo de forma manual. Pero, tal vez sea más recomendado realizarlo manualmente porque recuerda que tus palabras clave deben ser naturales y así también tendrás más control al momento de editar los contenidos.</p>
<p>Ahora sin más, a continuación puedes ver las etiquetas, también llamadas&nbsp;<em>tags</em>, más utilizadas para optimizar y posicionar en buscadores.</p>
<h4><span class="ez-toc-section" id="Etiquetas_para_resaltar_las_keywords" ez-toc-data-id="#Etiquetas_para_resaltar_las_keywords"></span>Etiquetas para resaltar las keywords<span class="ez-toc-section-end"></span></h4>
<p>También conocidas como “meta-keywords” se utilizan para definir expresamente&nbsp;<strong>cuáles son las palabras clave más importantes para tu contenido</strong>. Suelen insertarse al principio de la estructura del contenido, de forma que puedan servir como guía al crawler al momento de la evaluación.</p>
<p>Estas tienen un valor histórico importante, ya que se utilizaron&nbsp;<strong>para posicionar en Google con mayor efectividad</strong>&nbsp;hace más de 10 años. Pero, desde que el algoritmo evolucionó es importante mencionar que éstas deben tener relación con el resto del contenido, así como el título y la descripción.</p>
<p>Ahora, un pequeño ejemplo, si tienes un sitio&nbsp;<strong>web</strong>&nbsp;sobre contenidos en WordPress y vas a publicar un post sobre “cuáles son las tendencias de contenidos en WordPress” debes indicar la etiqueta de la siguiente forma.</p>
<ul>
<li><em>contenidos en WordPress&nbsp;</em></li>
</ul>
<h4><span class="ez-toc-section" id="Etiquetas_para_senalar_encabezados" ez-toc-data-id="#Etiquetas_para_senalar_encabezados"></span>Etiquetas para señalar encabezados<span class="ez-toc-section-end"></span></h4>
<p>El segundo tag en&nbsp; importancia son los encabezados, son utilizadas para darle relevancia al contenido, permitir que se extienda con una estructura más profesional y también le da al usuario una mejor experiencia de navegación.&nbsp;<strong>Los encabezados pueden ser separados por títulos y subtítulos de varios niveles</strong>, seguramente ya has escuchado hablar de ellos anteriormente, son los famosos H1, H2, H3…</p>
<p>Asimismo, gracias a los avances en la semántica del buscador, es posible que incluso tu&nbsp;<strong>web</strong>&nbsp;pueda ser posicionada con mayor efectividad si solo contiene&nbsp;<strong>una buena estructura y jerarquización del texto</strong>. Recuerda que Google siempre apostará por los sitios&nbsp;<strong>web</strong>&nbsp;que pongan por delante la experiencia del usuario, pero esto solo causará efecto si lo combinas con una buena estrategia de palabras clave.</p>
<p>En este sentido, debes tener en cuenta que&nbsp;<strong>siempre debe haber una sola etiqueta H1 en tu contenido</strong>, de ahí en más, es posible introducir tantos H2 o H3 como necesites.</p>
<h5><span class="ez-toc-section" id="%C2%BFCual_es_la_diferencia_entre_el_H1_y_el_titulo" ez-toc-data-id="#¿Cual_es_la_diferencia_entre_el_H1_y_el_titulo"></span>¿Cuál es la diferencia entre el H1 y el título?<span class="ez-toc-section-end"></span></h5>

<p>Verás, en la estructura de tu HTML debes incluir ambas etiquetas,&nbsp;&nbsp;y el encabezado</p>
<h1></h1>
<p>. El primero es el que tendrá el impacto semántico en los buscadores, por lo que se posicionará en las SERP’s y también en la parte superior de la pestaña donde se abrirá tu página. Asimismo,&nbsp;<strong>el título será el que será evaluado y comparado con la consulta</strong>&nbsp;del usuario para determinar la relevancia del mismo.</p>
<p>Mientras que la etiqueta para el encabezado</p>
<h1><span class="ez-toc-section" id="es_el_que_se_vera_dentro_de_la_pagina_y_estara_disponible_ante_el_usuario_Ambas_son_relevantes_para_el_SEO_y_el_posicionamiento_por_lo_que_es_importante_que_aunque_sean_similares_deben_tener_algo_que_las_diferencie_sobre_todo_para_llamar_la_atencion_del_usuario" ez-toc-data-id="#es_el_que_se_vera_dentro_de_la_pagina_y_estara_disponible_ante_el_usuario_Ambas_son_relevantes_para_el_SEO_y_el_posicionamiento_por_lo_que_es_importante_que_aunque_sean_similares_deben_tener_algo_que_las_diferencie_sobre_todo_para_llamar_la_atencion_del_usuario"></span>es el que se verá dentro de la página y estará disponible ante el usuario.&nbsp;<strong>Ambas son relevantes para el SEO y el posicionamiento</strong>, por lo que es importante que, aunque sean similares, deben tener algo que las diferencie, sobre todo para llamar la atención del usuario.<span class="ez-toc-section-end"></span></h1>
<h4><span class="ez-toc-section" id="Etiquetas_para_anadir_enlaces" ez-toc-data-id="#Etiquetas_para_anadir_enlaces"></span>Etiquetas para añadir enlaces<span class="ez-toc-section-end"></span></h4>
<p>También es una de las más importantes, a través de la etiqueta de enlaces&nbsp;<strong>es posible generar una buena estrategia de linkbuilding</strong>, seguramente has escuchado que puede incrementar tu SEO al máximo. Para añadirlos solo deberás escribir&nbsp;,&nbsp;así de simple. Pero recuerda que esta estrategia requiere de un trabajo en conjunto con el anchor text.</p>
<p>Aunque debe contener tus palabras clave, el texto ancla debe ser natural, formar parte del texto como si nunca hubieses planeado introducirlo, pero con la&nbsp;<strong>suficiente relevancia para ofrecerle más información al usuario</strong>. Siguiendo el ejemplo del contenido de WordPress, puedes añadir un enlace de la siguiente forma.</p>
<ul>
<li>“… pero, para mejorar los contenidos de tu&nbsp;<strong>web</strong>, siempre puedes añadir un&nbsp;<u>plugin para&nbsp;<strong>corre</strong>gir textos en WordPress</u>&nbsp;&nbsp;y despreocuparte por algún error gramatical…”</li>
</ul>
<p>Asimismo, existen&nbsp;<strong>atributos que deberías añadir a los enlaces</strong>&nbsp;que serán de gran utilidad para el algoritmo, por ejemplo, para indicar que se trata de un enlace que no debería posicionarse. Algunos de los más importantes son los siguientes.</p>
<ul>
<li><strong>Title</strong>: (No confundir con el título) Se utiliza dentro de la etiqueta de enlazado para determinar un texto emergente o referencia semántica.</li>
<li><strong>No follow</strong>: Es una etiqueta que indica&nbsp;<strong>cuando el algoritmo no debería evaluar un enlace</strong>&nbsp;(por ejemplo, cuando tienes información privada dentro del sitio o que aún no está optimizada)</li>
<li><strong>Target</strong>: Se utiliza para definir si el enlace abrirá en una nueva pestaña o en la misma ventana.</li>
</ul>
<h4><span class="ez-toc-section" id="Etiqueta_para_senalar_negritas" ez-toc-data-id="#Etiqueta_para_senalar_negritas"></span>Etiqueta para señalar negritas<span class="ez-toc-section-end"></span></h4>

<p>Las negritas también son factores del SEO que indican&nbsp;<strong>cuándo una frase es relevante para el usuario y para el buscador</strong>. Con ellas, el algoritmo puede encontrar relevancias o comparaciones con las consultas de los usuarios y así mejorar el posicionamiento. Por tanto, son indispensables cuando vas a modificar tu código HTML.</p>
<p>Pero recuerda, deberías emplearlas solo dentro de los párrafos, ya que si la incluyes con otras etiquetas (como en el título o los encabezados) puedes generar una sobreoptimización,&nbsp;<strong>esto puede afectar también tu posicionamiento, así que trata de hacerlo simple</strong>. Igualmente, las negritas no deberían tener una extensión de más de 15 palabras, así como una distribución equitativa a lo largo de todo el contenido.</p>
<p>Para introducirlas utilizarás los fragmentos&nbsp;<strong>&nbsp;y&nbsp;, ambas se utilizan para hacer negritas en el texto. Esta última es la que utilizarás para darle más fuerza semántica a la frase que vas a resaltar,&nbsp;por lo que tiene mayor relevancia para el buscador, mientras que la primera se utiliza más a favor del usuario. Recuerda que debes utilizar ambas de forma equitativa.</strong></p>
<h2><span class="ez-toc-section" id="Otras_etiquetas_para_mejorar_el_SEO_en_el_HTML_de_tu_web" ez-toc-data-id="#Otras_etiquetas_para_mejorar_el_SEO_en_el_HTML_de_tu_web"></span>Otras etiquetas para mejorar el SEO en el HTML de tu&nbsp;<strong>web</strong><span class="ez-toc-section-end"></span></h2>
<p>Por último, no está de más echarle un vistazo a&nbsp;<strong>otras tags que puedes emplear en tu HTML para hacerlo más atractivo</strong>&nbsp;ante los buscadores. Aquí tienes una lista de los más utilizados.</p>
<ul>
<li>: Son 160 caracteres que se mostrarán en la SERP’s, justo debajo de tu título y URL. Debe contener la palabra clave principal y recomendablemente en forma de copy para garantizar que los usuarios hagan clic.</li>
<li><strong><cite>y&nbsp;</cite></strong>: Se utilizan para hacer citas, la primera define una cita larga que se incorpora dentro del texto, mientras que “cite” es para introducir una cita externa.</li>
<li>&nbsp;: Es una etiqueta que se utiliza normalmente en WordPress y permite definir la dirección de un negocio, es indispensable para hacer SEO local.</li>
<li><code></code>: Se emplea con frecuencia en&nbsp;<strong>sitios&nbsp;web&nbsp;que necesitan explicar códigos en HTML</strong>&nbsp;y deben mostrarse en el texto y no ocultarse, como pasa normalmente.</li>
</ul>
<p>Ahora sí, ya puedes ir y hacerle unos cuantos&nbsp;<strong>cambios a tu código HTML para mejorar tu SEO y el posicionamiento de tu&nbsp;web</strong>. Recuerda que también puedes insertar plugins y otros complementos para ayudarte en el proceso.</p>
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