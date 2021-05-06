import { NavLink } from 'react-router-dom';
import Navbar from 'components/dashboard/Navbar/Navbar';
import './dashboard.scss';
type Children = {
  children?: JSX.Element;
};

const Dashboard = ({ children }: Children) => {
  return (
    <section className="section__dashboard">
      <aside>
        <ul>
          <li>
            <NavLink to="/user/home" activeClassName="a-active">
              <i className="bx bx-home-heart"></i>
              <span>Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/user/search" activeClassName="a-active">
              <i className="bx bx-search-alt-2"></i>
              <span>Search</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/profile" activeClassName="a-active">
              <i className="bx bx-user"></i>
              <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/chart" activeClassName="a-active">
              <i className="bx bx-line-chart"></i>
              <span>Chart</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/about" activeClassName="a-active">
              <i className="bx bx-info-square"></i>
              <span>About</span>
            </NavLink>
          </li>
        </ul>
      </aside>
      <div className="div__child">
        <Navbar />
        {children}
      </div>
    </section>
  );
};

export default Dashboard;
