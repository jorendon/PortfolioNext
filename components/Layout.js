import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import PropTypes from "prop-types";
import NProgress from "nprogress";
import nProgress from "nprogress";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram,faFacebook,faWhatsapp,faTelegram} from "@fortawesome/free-brands-svg-icons";

const Layout = ({ children, title, footer = true, dark = false,navBar }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    router.events.on("routeChangeError", () => nProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <div>
      {navBar && <Navbar />}

      <main>
        {/* Title */}
        {title && (
          <h1 className="text-center text-white">
            {title}
          </h1>
        )}

        {/* Content */}
        {children}
      </main>

      {footer && (
        <footer className="bg-dark text-white text-center">
          <div className="container p-4">
            <h4>&copy; Jonathan Rendón</h4>
            <a href="https://www.instagram.com/jrendonve/" target="_blank"> <FontAwesomeIcon icon={faInstagram} className="mr-md-2 text-white" /></a>
            <a href="https://www.facebook.com/Jrendonve" target="_blank"><FontAwesomeIcon icon={faFacebook} className="mr-md-2 text-white" /></a>
            <a href="https://wa.me/584125875461" target="_blank"><FontAwesomeIcon icon={faWhatsapp} className="mr-md-2 text-white"/></a>
            <a href="https://t.me/Jorendon" target="_blank"><FontAwesomeIcon icon={faTelegram} className="mr-md-2 text-white"/></a>
            <p>2007 - {new Date().getFullYear()}</p>
            <p>All rights Reserved.</p>

          </div>
        </footer>
      )}
    </div>
  );
};

Layout.proptypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  footer: PropTypes.bool,
};

export default Layout;
