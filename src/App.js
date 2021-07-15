import { AppRouter } from './routes/AppRouter';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFetch } from './hooks/useFetch';
import { useDispatch } from 'react-redux';
import { setUsers } from './redux/reducers/users';

function App() {
  const {
    loading,
    data: users,
    error,
  } = useFetch(
    'https://jsonplaceholder.typicode.com/users',
  );

  const dispatch = useDispatch();

  dispatch(setUsers({ loading, users, error }));
  return (
    <div className='App'>
      <AppRouter />
    </div>
  );
}

export default App;
