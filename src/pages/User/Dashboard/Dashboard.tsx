import { Navbar, Aside } from 'components';
import { useState } from 'react';

type Children = {
  children?: JSX.Element;
};

const Dashboard = ({ children }: Children) => {
  const [menu, setmenu] = useState(false);
  return (
    <section className="bg-gray-100 dark:bg-gray-800 relative h-screen overflow-hidden">
      <div className="flex items-start justify-between">
        <Aside menu={menu} />
        <div className="flex flex-col w-full md:space-y-4">
          <Navbar setmenu={setmenu} menu={menu} />
          <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 bg-white rounded-lg">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
