import '@/styles/globals.css'
import "../../public/assets/css/bootstrap.css"
import "../../public/assets/css/maicons.css"
import "../../public/assets/vendor/animate/animate.css"
import "../../public/assets/vendor/owl-carousel/css/owl.carousel.css"
import "../../public/assets/vendor/fancybox/css/jquery.fancybox.css"
import "../../public/assets/css/theme.css"
import { DatosProvider } from "../context/Context";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from 'next/router'
import Layout from '@/components/layout'

// import App from "next/app";


export default function App({ Component, pageProps }) {

  const router = useRouter()

  return (
    <DatosProvider>
      <Layout>
        <AnimatePresence>
          <motion.main
            key={router.route}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ position: 'absolute', width: '100%' }}
          >


            <Component {...pageProps} />


          </motion.main>
        </AnimatePresence>
      </Layout>
    </DatosProvider >
  );
}


// class MyApp extends App {
//   render() {
//     const { Component, pageProps, router } = this.props;

//     return (
//       <DatosProvider>

//         <Component {...pageProps} />

//       </DatosProvider>
//     );
//   }
// }

// export default MyApp;
