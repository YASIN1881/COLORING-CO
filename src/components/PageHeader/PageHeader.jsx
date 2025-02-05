import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaHome } from 'react-icons/fa';
import './PageHeader.css';

const PageHeader = ({ title, currentPage }) => {
  return (
    <div className="page-header" style={{ backgroundImage: "url('/img/page-header-bg-1-1.jpg')" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-[300px] text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <div className="breadcrumbs">
            <Link to="/" className="text-white hover:text-amber-500 flex items-center gap-2">
              <FaHome className="text-lg" />
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-amber-500">{currentPage}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired
};

export default PageHeader; 