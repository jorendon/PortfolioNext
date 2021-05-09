import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import PropTypes from "prop-types";
import NProgress from "nprogress";
import nProgress from "nprogress";
import classNames from "classnames";

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
            <h3>&copy; Jonathan Rendón</h3>
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
