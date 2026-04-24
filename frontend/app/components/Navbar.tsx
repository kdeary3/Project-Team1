
import {Link} from "react-router";

function NavBar() {
    return (
        <nav className={"bg-white dark:bg-black dark:bf-gray-900 border-b border-gray-200 dark:border-gray-700"}>

            {/* max-w-7xl centers content; px-4 sm:px-6 adds responsive padding */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6
               flex items-center justify-between h-16">

                {/* Brand name */}
                <span className="text-xl font-bold tracking-tighttext-gray-900 dark:text-white">Rate My Leader</span>

                {/* Links + toggle — flex row, gap-6 between items */}
                <div className="flex items-center gap-6">
                    <Link to="/"
                          className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                        Home
                    </Link>
                    <Link to="/createReview"
                          className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                        Rating Form
                    </Link>

                </div>

            </div>
        </nav>

    );
}


export default NavBar;
