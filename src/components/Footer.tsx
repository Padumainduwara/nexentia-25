// src/components/Footer.tsx

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="w-full bg-gray-900/40 border-t border-purple-800/40 text-gray-400 font-sans">
            <div className="container mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
                
                {/* Column 1: ලාංඡන සහ විස්තරය */}
                <div className="flex flex-col items-center md:items-start gap-6">
                    <div className="flex items-center justify-center md:justify-start gap-4 flex-wrap">
                        <div className="relative h-8 w-28">
                            <Image src="/nexentia-logo.png" alt="Nexentia Logo" layout="fill" objectFit="contain" />
                        </div>
                        <div className="relative h-12 w-12">
                            <Image src="/sjclogo.jpeg" alt="School Logo" layout="fill" objectFit="contain" />
                        </div>
                        <div className="relative h-12 w-14">
                             <Image src="/jicts-logo.png" alt="JICTS Logo" layout="fill" objectFit="contain" />
                        </div>
                    </div>
                    <p className="text-sm">
                        Nexentia, the flagship ICT Day of St. Joseph's Girls' School, is an inter-school event celebrating future tech and digital innovation.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h3 className="font-orbitron text-lg font-bold text-white mb-4 uppercase">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link href="#about" className="hover:text-purple-400 transition-colors" data-cursor-hover>About</Link></li>
                        <li><Link href="#categories" className="hover:text-purple-400 transition-colors" data-cursor-hover>Categories</Link></li>
                        <li><Link href="#countdown" className="hover:text-purple-400 transition-colors" data-cursor-hover>Countdown</Link></li>
                        <li><Link href="#contact" className="hover:text-purple-400 transition-colors" data-cursor-hover>Contact</Link></li>
                    </ul>
                </div>

                {/* Column 3: Contact Us */}
                <div>
                    <h3 className="font-orbitron text-lg font-bold text-white mb-4 uppercase">Contact Us</h3>
                    <p className="text-sm">Josephian ICT Society,<br/>St. Joseph's Girls' School,<br/>Nugegoda.</p>
                    <a href="mailto:jictsofficial@gmail.com" className="block mt-2 text-sm hover:text-purple-400 transition-colors" data-cursor-hover>jictsofficial@gmail.com</a>
                </div>

                {/* Column 4: Inquiry */}
                 <div>
                    <h3 className="font-orbitron text-lg font-bold text-white mb-4 uppercase">Looking for Something?</h3>
                    <p className="text-sm">Feel free to reach out to us for any inquiries or support. We're here to help!</p>
                </div>
            </div>
            <div className="w-full border-t border-purple-800/40 py-6 text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved by JICTS</p>
            </div>
        </footer>
    );
};

export default Footer;
