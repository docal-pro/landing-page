import React from 'react';
import { Menu, X, ChevronDown, Github, Twitter } from 'lucide-react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    return (
        <nav className="w-full p-4 bg-black bg-opacity-75 border-b border-gray-700">
            <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between">
                <div className="flex items-center gap-4">
                    <img src="./assets/logo-light.png" width="60" className="transition-transform logo-rotate" alt="DOCAL Logo" />
                    <h1 className="text-4xl font-bold text-white mt-2 font-ocr">DOCAL</h1>
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={`${isOpen ? 'block' : 'hidden'} md:block w-full md:w-auto font-ocr`}>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-4 md:mt-0">
                        <div className="relative group">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex items-center gap-1 text-white hover:text-green-400 transition-colors"
                            >
                                Community
                                <ChevronDown size={16} />
                            </button>

                            <div className={`${dropdownOpen ? 'block' : 'hidden'} md:hidden md:group-hover:block absolute left-0 mt-2 w-48 bg-black bg-opacity-90 rounded-md shadow-lg py-1`}>
                                <a href="https://github.com/docal-pro" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 text-sm text-white hover:bg-gray-800">
                                    <Github size={16} />
                                    Codebase
                                </a>
                                <a href="https://x.com/docal_pro" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 text-sm text-white hover:bg-gray-800">
                                    <Twitter size={16} />
                                    X
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};