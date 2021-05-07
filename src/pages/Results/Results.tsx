import Card from 'components/dashboard/card/Card';

const Results = () => {
  return (
    <section className="col-span-full">
      <input
        type="text"
        className="rounded-lg border-transparent appearance-none border border-gray-300 w-11/12 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent m-2"
        placeholder="Search..."
      />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
};

export default Results;
