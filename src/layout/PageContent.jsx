import PropTypes from "prop-types";

import Header from "./Header";
import Footer from "./Footer";

export default function PageContent({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

PageContent.propTypes = {
  children: PropTypes.node.isRequired,
};
