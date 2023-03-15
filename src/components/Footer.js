import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className=" bg-white rounded-t-lg shadow mt-4 dark:bg-gray-800">
            <div className="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023{' '}
                    <Link to="/" className="hover:underline">
                        Cinemate
                    </Link>
                    . All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a
                            href="/"
                            target="_blank"
                            rel="noreferrer"
                            className="mr-4 hover:underline md:mr-6 "
                        >
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            target="_blank"
                            rel="noreferrer"
                            className="mr-4 hover:underline md:mr-6"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            target="_blank"
                            rel="noreferrer"
                            className="mr-4 hover:underline md:mr-6"
                        >
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://mattruetz.com"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                        >
                            www.mattruetz.com
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
