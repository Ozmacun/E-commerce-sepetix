import PropTypes from 'prop-types';

export default function NavbarLayout({ children }) {
    return (
      <header className="h-[136px] ">
        <nav>
          {children}
        </nav>
      </header>
    );
}

NavbarLayout.propTypes = {
  children: PropTypes.node.isRequired,
};