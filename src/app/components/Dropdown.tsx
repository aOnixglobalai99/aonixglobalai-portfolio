import { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Function to close the dropdown when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  // Attach event listener when dropdown is open
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative group overflow-visible">
      {/* Dropdown Button */}
      <button className="flex items-center text-[15px] text-[#077bc8] font-semibold hover:text-[#121a5e] transition-[0.3s]">
        PAGES <FaChevronDown className="ml-2" />
      </button>

      {/* Dropdown Menu */}
      <div
        className="absolute left-0 mt-2 bg-[#333] rounded-lg shadow-lg w-48 
      opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
        onMouseEnter={(e) =>
          e.currentTarget.classList.add('opacity-100', 'visible')
        }
        onMouseLeave={(e) =>
          e.currentTarget.classList.remove('opacity-100', 'visible')
        }
      >
        <a
          href="#team"
          className="block px-4 py-2 text-gray-100 hover:bg-gray-300 hover:text-[#333] rounded-md"
        >
          Our Team
        </a>
        <a
          href="#team"
          className="block px-4 py-2 text-gray-100 hover:bg-gray-300 hover:text-[#333] rounded-md"
        >
          Our Work
        </a>
        <a
          href="#faq"
          className="block px-4 py-2 text-gray-100 hover:bg-gray-300 hover:text-[#333] rounded-md"
        >
          FAQ
        </a>
      </div>
    </div>
  );
};

export default Dropdown;
