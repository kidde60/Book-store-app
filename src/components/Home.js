import AddBook from './AddBook';
import Book from './Book';

const Home = () => (
  <div className="Home">
    <h1> Books List</h1>
    <ul>
      <li>
        <Book name="Acts of Desperation" author="Acts of Desperation by Megan Nolan" />
      </li>
      <li>
        <Book name="Acts of Desperation" author="Acts of Desperation by Megan Nolan" />
      </li>
      <li>
        <Book name="Acts of Desperation" author="Acts of Desperation by Megan Nolan" />
      </li>
    </ul>

    <AddBook />
  </div>
);
export default Home;
