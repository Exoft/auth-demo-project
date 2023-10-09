type NavBarProps = {
  logout: () => void;
};

const NavBar = ({ logout }: NavBarProps) => {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center">
          <img src="/vite.svg" className="h-8 mr-3" alt="Vite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Navigation</span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            onClick={() => logout()}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
