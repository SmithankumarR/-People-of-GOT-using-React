import Header from './Header';
import Tags from './Tags';
import '../stylesheets/App.css';

function App() {
  return (
    <>
      <Header />;
      <main className="container">
        <Tags />
      </main>
    </>
  );
}

export default App;
