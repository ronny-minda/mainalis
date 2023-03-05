import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <script async src="../assets/js/jquery-3.5.1.min.js" ></script>

        <script async src="../assets/js/bootstrap.bundle.min.js" ></script>

        <script async src="../assets/vendor/owl-carousel/js/owl.carousel.min.js" ></script>

        <script async src="../assets/vendor/wow/wow.min.js" ></script>

        <script async src="../assets/vendor/fancybox/js/jquery.fancybox.min.js" ></script>

        <script async src="../assets/vendor/isotope/isotope.pkgd.min.js" ></script>

        <script async src="../assets/js/google-maps.js" ></script>

        <script async src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

        <script async src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>

        <script async src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js"></script>

      </Head>
      <body>
        <Main />
        <NextScript />




      </body>
    </Html>
  )
}
