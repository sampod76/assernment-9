import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-400" aria-labelledby="footer-heading">
                <h2 id="footer-heading" className="sr-only">Footer</h2>

                <div className="px-4 py-12 mx-auto bg-gray-50 max-w-7xl sm:px-6 lg:px-16">
                    <div className="flex flex-wrap items-baseline lg:justify-center ">
                        <span className="mt-2 text-sm font-light text-gray- ">
                            Copyright © 2020 - 2021
                            <a href="https://wickedlabs.dev" className="mx-2 text-wickedblue hover:text-gray-500" rel="noopener noreferrer">@wickedlabsHQ</a>. Since 2020
                        </span>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;