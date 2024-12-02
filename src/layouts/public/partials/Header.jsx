import PropTypes from 'prop-types'; // Make sure to import PropTypes
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onScrollToTarget }) => {

  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

    const toggleLanguageMenu = () => {
        setIsLanguageOpen(!isLanguageOpen);
    };

  return (
    <>
      {/* <!-- Language Change and Font Size Header --> */}
      <header className="bg-gray-200 p-2 text-center">
        <div className="flex justify-between max-w-6xl mx-auto">
              <div className="">
                <ul className="flex space-x-6">
                  <li> <Link title='Decrease font size'>A-</Link></li>
                  <li> <Link title='Reset font size'>A</Link></li>
                  <li><Link title='Increase font size'>A+</Link></li>
                </ul>
              </div>
              <div className="">
              <ul className="flex space-x-6">
            <li>
                <em className="fa fa-desktop" aria-hidden="true"></em>
                <span className="">Screen Reader</span>
            </li>
            <li>
                <em className="fa fa-fast-backward" aria-hidden="true"></em>
                <span className="">Skip to Main Content</span>
            </li>
            <li>
                <em className="fa fa-forward" aria-hidden="true"></em>
                <span onClick={onScrollToTarget} className="cursor-pointer">Skip to Nav Content</span>
            </li>
            <li className="relative">
                <button
                    onClick={toggleLanguageMenu}
                    className="flex items-center focus:outline-none"
                >
                    <span className="">
                        <em className="fa fa-globe"></em> Language
                    </span>
                    <em className="fa fa-caret-down ml-1" aria-hidden="true"></em>
                </button>
                {isLanguageOpen && (
                    <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg">
                        <li className="px-4 py-2 hover:bg-gray-100">
                            <span>हिन्दी</span>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                            <span>English</span>
                        </li>
                    </ul>
                )}
            </li>
        </ul>
              </div>
        </div>
      </header>
    </>
  )
}

// PropTypes validation
Header.propTypes = {
  onScrollToTarget: PropTypes.func.isRequired,
};

export default Header