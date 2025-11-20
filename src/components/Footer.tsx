'use client';

import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Polibatam Robotics
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">About</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#about" className="hover:text-white">Program</a>
                </li>
                <li>
                  <a href="#faculty" className="hover:text-white">Faculty</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Resources</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#curriculum" className="hover:text-white">Curriculum</a>
                </li>
                <li>
                  <a href="#facilities" className="hover:text-white">Facilities</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Community</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#students" className="hover:text-white">Students</a>
                </li>
                <li>
                  <a href="#alumni" className="hover:text-white">Alumni</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">
            © 2024 <a href="/" className="hover:underline">Polibatam Robotics™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
            <a href="#" className="text-gray-400 hover:text-white">
              <BsFacebook className="w-5 h-5" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <BsInstagram className="w-5 h-5" />
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <BsTwitter className="w-5 h-5" />
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <BsGithub className="w-5 h-5" />
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
