import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function BreadCrumb() {
  const { pathname } = useLocation();
  const pathnames = pathname.split('/').filter((x) => x);
  console.log(pathnames);

  let breadcrumbpath = '';

  return (
    <div className="w-full bg-red-300 rounded-md p-1 ">
      {pathnames.length > 0 && (
        <Link to="/" className="hover:text-violet-700 ml-1">
          Home
        </Link>
      )}
      {pathnames.map((path, idx) => {
        breadcrumbpath += `/${path}`;
        const isLast = idx === pathnames.length - 1;

        return isLast ? (
            <span key={path} className="ml-1">
              {`>${path}`}
            </span>
            
          ) : (
            <span key={path} className="ml-1">
              {'>'}
              <Link to={breadcrumbpath} className="hover:text-violet-700">
                {path}
              </Link>
            </span>
          )
      })}
    </div>
  );
}

export default BreadCrumb;
