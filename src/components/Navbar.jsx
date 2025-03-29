import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Github, Twitter, Send, CloudRain } from 'lucide-react';

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const dropdownRefs = useRef({});

    const handleClickOutside = (event) => {
        if (activeDropdown && !dropdownRefs.current[activeDropdown]?.contains(event.target)) {
            setActiveDropdown(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [activeDropdown]);

    const toggleDropdown = (dropdownName) => {
        setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    };

    const isDropdownOpen = (dropdownName) => activeDropdown === dropdownName;

    return (
        <nav className="w-full p-4 bg-black bg-opacity-75 border-b border-gray-700">
            <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between">
                <div className="flex items-center gap-4">
                    <img src="./assets/logo-light.png" width="80" className="transition-transform logo-rotate" alt="DOCAL Logo" />
                    <div className='flex flex-col items-start'>
                        <h1 className="text-4xl font-bold text-white mt-2 font-ocr">DOCAL</h1>
                        <h2 className="text-sm lg:text-md font-bold text-center bg-gradient-to-br from-gray-300 to-gray-200 bg-clip-text text-transparent font-ocr tracking-tight">
                            Decentralised Organisation<br />for Class-Action Lawsuits
                        </h2>
                    </div>
                </div>

                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-white"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto font-ocr tracking-tight`}>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-4 md:mt-0">
                        {/* Resources Dropdown */}
                        <div
                            ref={el => dropdownRefs.current.resources = el}
                            className="relative"
                        >
                            <button
                                onClick={() => toggleDropdown('resources')}
                                className="flex items-center gap-1 text-white hover:text-green-400 transition-colors"
                            >
                                Resources
                                <ChevronDown size={16} />
                            </button>
                            <div
                                className={`${isDropdownOpen('resources') ? 'block' : 'hidden'
                                    } absolute left-0 mt-2 w-48 bg-black rounded-md shadow-lg py-1 z-50`}
                            >
                                <a
                                    href="https://github.com/docal-pro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 text-sm text-white hover:bg-gray-800"
                                >
                                    <Github size={16} />
                                    Codebase
                                </a>
                            </div>
                        </div>

                        {/* Community Dropdown */}
                        <div
                            ref={el => dropdownRefs.current.community = el}
                            className="relative"
                        >
                            <button
                                onClick={() => toggleDropdown('community')}
                                className="flex items-center gap-1 text-white hover:text-green-400 transition-colors"
                            >
                                Community
                                <ChevronDown size={16} />
                            </button>
                            <div
                                className={`${isDropdownOpen('community') ? 'block' : 'hidden'
                                    } absolute left-0 mt-2 w-48 bg-black rounded-md shadow-lg py-1 z-50`}
                            >
                                <a
                                    href="https://x.com/docal_pro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 text-sm text-white hover:bg-gray-800"
                                >
                                    <Twitter size={16} />
                                    X
                                </a>
                                <a
                                    href=""
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 text-sm text-white hover:bg-gray-800 opacity-50 cursor-not-allowed"
                                >
                                    <Send size={16} />
                                    Telegram
                                </a>
                            </div>
                        </div>

                        {/* Apps Dropdown */}
                        <div
                            ref={el => dropdownRefs.current.apps = el}
                            className="relative"
                        >
                            <button
                                onClick={() => toggleDropdown('apps')}
                                className="flex items-center gap-1 text-white hover:text-green-400 transition-colors"
                            >
                                Apps
                                <ChevronDown size={16} />
                            </button>
                            <div
                                className={`${isDropdownOpen('apps') ? 'block' : 'hidden'
                                    } absolute left-0 mt-2 w-48 bg-black rounded-md shadow-lg py-1 z-50`}
                            >
                                <a
                                    href="http://ai.docal.pro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 text-sm text-white hover:bg-gray-800"
                                >
                                    <CloudRain size={16} />
                                    DOCAL AI
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};