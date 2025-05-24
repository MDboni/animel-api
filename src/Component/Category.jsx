import { NavLink } from 'react-router-dom';

const Category = ({ item , children }) => {
  return (
    <div>
      <div className="text-center justify-center lg:flex">
        <ul className="menu menu-horizontal px-1 flex flex-wrap justify-center">
          {
            item.map((items, i) => (
              <li className="mx-3" key={i}>
                <NavLink to={`/ByCategory/${items.category}`}>
                  {items.category}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </div>
      {children}
    </div>
  )
}


export default Category;