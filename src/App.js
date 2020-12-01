import Header from "./components/Header";
import NewsFeed from "./components/NewsFeed";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="app">
      <Header className="app__header" />

      <div className="app__body">
        <div className="app__body-container">
          <NewsFeed />

          <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;
