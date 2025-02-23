import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ApproachCard } from "./components/ApproachCard";
import { InfoCard } from "./components/InfoCard";
import { GetInvolvedCard } from "./components/GetInvolvedCard";

const App = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
            <Navbar />

            <main className="flex-grow px-6 py-12 bg-black bg-opacity-25">
                <h2 className="text-2xl lg:text-4xl font-bold text-center mb-12 bg-gradient-to-br from-gray-300 to-gray-200 bg-clip-text text-transparent font-ocr tracking-tight">
                    Crypto and Web3 Watchdog
                </h2>

                <div className="max-w-6xl mx-auto">
                    {/* Info Cards Section */}
                    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <InfoCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>}
                            title="Our Vision"
                            description="Empowering the Web3 community through collective legal action, ensuring accountability and fostering trust in the decentralised ecosystem."
                        />

                        <InfoCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>}
                            title="Governance"
                            description="Our decentralised governance model ensures transparent decision-making through community-driven proposals and voting mechanisms."
                        />

                        <InfoCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>}
                            title="Technical Framework"
                            description="Built on the Solana-native Realms Protocol, with planned upgrades for custom electoral methods and optimal governance mechanisms."
                        />
                    </section>

                    {/* Approach Section */}
                    <section className="bg-black bg-opacity-50 rounded-xl p-8 shadow-lg mb-12 transition-shadow duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <h3 className="text-2xl font-semibold text-green-400 font-ocr tracking-tight">Our Approach</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <ApproachCard
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>}
                                title="Legal Defence Fund"
                                description="We maintain a community-controlled treasury dedicated to funding strategic legal actions that protect and advance Web3 interests."
                            />
                            <ApproachCard
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>}
                                title="Strategic Partnerships"
                                description="Collaborating with key stakeholders in the cryptocurrency and blockchain space to strengthen our position as the trusted decentralised watchdog."
                            />
                        </div>
                    </section>

                    {/* Get Involved Section */}
                    <section className="bg-black bg-opacity-50 rounded-xl p-8 text-white">
                        <div className="flex items-center gap-3 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <h3 className="text-2xl font-semibold text-gray-100 font-ocr tracking-tight">Get Involved</h3>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            <GetInvolvedCard
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                </svg>}
                                title="Join Governance"
                                description="Participate in key decisions and shape the future of decentralised legal action."
                            />
                            <GetInvolvedCard
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                </svg>}
                                title="Contribute"
                                description="Support ongoing cases and help build our legal defence treasury."
                            />
                            <GetInvolvedCard
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>}
                                title="Stay Informed"
                                description="Follow our updates and learn about important cases in the Web3 space."
                            />
                        </div>
                    </section>
                </div>
            </main>

            <footer className="text-center text-sm text-gray-600 p-4">
                <Footer />
            </footer>
        </div>
    );
};

export default App;