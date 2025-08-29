import { ReactNode } from "react";
import { TransitionLink } from "../components/TransitionLink";

export const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading" className="bg-black py-16">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

        {/* Bottom footer */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-neutral-800 pt-8 md:flex-row">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} The Corradino Group. All rights reserved
          </p>
          {/* <TransitionLink
            href="/"
            aria-label="Corradino"
            className="order-first md:order-none"
          >
            <img src="../app/Images and resumes/TCG_#2.png" alt="Corradino" width={150} height={25} />
          </TransitionLink> */}
          <ul
            aria-label="Legal"
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
          >
            <li>
              <a href="#" className="hover:text-white">
                Terms &amp; conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      {/* </div> */}
    </footer>
  );
};

type NavGroupProps = {
  title: string;
  children?: ReactNode;
};

const NavGroup = ({ title, children }: NavGroupProps) => (
  <nav aria-labelledby={`${title.toLowerCase()}-heading`}>
    <h3
      id={`${title.toLowerCase()}-heading`}
      className="mb-6 text-xl font-medium"
    >
      {title}
    </h3>
    <ul className="space-y-4" role="list">
      {children}
    </ul>
  </nav>
);

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <li>
      <TransitionLink href={href} className="hover:text-gray-300">
        {children}
      </TransitionLink>
    </li>
  );
};