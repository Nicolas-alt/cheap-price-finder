import { Card } from 'components';

const Profile = () => {
  return (
    <section className="col-span-full p-3">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            alt="profil"
            src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
            className="mx-auto object-cover rounded-full h-16 w-16 md:h-36 md:w-36 "
          />
          <span className="absolute grid place-items-center  cursor-pointer bg-indigo-300 rounded-full w-7 h-7 bottom-4 -right-2 md:bottom-1/4 md:-right-3">
            <i className="text-white bx bxs-camera"></i>
          </span>
        </div>
        <h3 className="text-sm md:text-lg pt-2">
          Charlie Fernando
          <button className="border-indigo-400 border-2 rounded-md cursor-pointer py-1 px-3 ml-2 text-indigo-400">
            Edit
          </button>
        </h3>
        <h4 className="flex items-center mt-3">
          <i className="bx bxs-cake text-indigo-400 mr-2"></i>
          Joined 4 July
        </h4>
      </div>
      <div className="flex flex-col">
        <h3 className="pl-4">History</h3>
        <div className="flex flex-wrap justify-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Profile;
