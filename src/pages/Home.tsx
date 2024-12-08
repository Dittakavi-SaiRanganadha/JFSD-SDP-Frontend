import Navbar from '../components/Header/Navbar';
// import SearchBar from '../components/Home/SearchBar';
import FeaturedProperties from '../components/Home/FeaturedProperties';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl text-white font-bold text-center mb-8">
              Find Your Dream Property
            </h1>
            {/* <SearchBar /> */}
          </div>
        </div>
        <FeaturedProperties />
      </main>
    </div>
  );
}