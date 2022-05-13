import Header from "./components/Header";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="max-w-xs md:max-w-6xl m-4 md:m-16 rounded-md flex flex-1 flex-col md:flex-row-reverse bg-blue-200">
      <Header />
      <div className="flex-1 px-8 md:px-6 lg:px-12 lg:py-16 md:py-6 py-8">
        <Nav />
      </div>
    </div>
  );
}

export default App;
