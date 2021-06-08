import React, { useCallback, useState } from 'react';
import { Route } from 'react-router';
import Categories from './components/Categories';
import NewsList from './components/NewsList';
import NewsPage from './components/NewsPage';

const App = () => {
  const  [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  return <Route path="/:category?" component={NewsPage} />;
}


export default App;
