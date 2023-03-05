import Logo from '@/svg/logo'
import Link from 'next/link'


const Footer = () => {

    return (
        <footer class="page-footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 py-3">
                        {/* <h3>Reve<span class="fg-primary">Tive.</span></h3> */}
                        <Logo style={{ fill: '#fff' }} />
                    </div>
                    <div class="col-lg-3 py-3">
                        <h5>Información del contacto</h5>
                        <p>301 The Greenhouse, Custard Factory, London, E2 8DY.</p>
                        <p>Email: example@mail.com</p>
                        <p>Telefono: +00 112323980</p>
                    </div>
                    <div class="col-lg-3 py-3">
                        <h5>Compañía</h5>
                        <ul class="footer-menu">
                            <li><a href="#">Career</a></li>
                            <li><a href="#">Resources</a></li>
                            <li><a href="#">News & Feed</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 py-3">
                        <h5>Boletin informativo</h5>
                        <form action="#">
                            <input type="text" class="form-control" placeholder="Email"></input>
                            <button type="submit" class="btn btn-primary btn-sm mt-2">Enviar</button>
                        </form>
                    </div>
                </div>

                <hr></hr>

                <div class="row mt-4">
                    <div class="col-md-6">
                        <p>Copyright - Mainalis - <Link href="/avisolegal">Aviso legal y Política de Privacidad</Link></p>
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

    )
}

export default Footer