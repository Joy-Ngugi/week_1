import List from './components/List';
import './App.css';
import Mockingbird from './photos/Mockingbird.jpg';
import George from './photos/1984.jpg';
import Catcher from './photos/the catcher.jpg';
import Great from './photos/the great.jpg';
import Rich from './photos/rich.jpg';
import Power from './photos/power.jpg';
import Positve from './photos/positive.jpg';

function App() {
  const books=[
    {
        
        title:"To Kill A Mockingbird",
        author:"Harper lee",
        image:{src:Mockingbird}
    },
    {
        
        title:"1984",
        author:"George Orwell",
        image:{src:George}
    },
    {
        
        title:"The Catcher in the Rye",
        author:"J.D. Salinger",
        image:{src:Catcher}
    },
    {
        
        title:"The Great Gatsby",
        author:"F. Scott Fitzgerald",
        image:{src:Great}
    },
    {
        
        title:"Rich Dad Poor Dad",
        author:"Robert Kiyosaki",
        image:{src:Rich}
        
    },
    {
        
        title:"The Power of Mental Discipline",
        author:"Ian Tuhovsky",
        image:{src:Power}
    },
    {
        
        title:"The Power of Positive Thinking",
        author:"Norman Vincent Peale",
        image:{src:Positve}
    }
]
  return (
    <div className="App">
      <header className=" py-6 bg-blue-600">
        <h1 className="text-white text-4xl text-center font-serif font-bold">Book Library</h1>
      </header>
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
      {books.map((book, index)=>(
       <List key={index} data={book}/>
      ))}
     </div>
       <footer className="bg-blue-600 py-4 text-center">
        <p className="text-white">© 2024 Book Library. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
