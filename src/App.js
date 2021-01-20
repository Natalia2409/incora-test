import React from 'react';
import Users from './components/Users/Users';
import Posts from './components/Posts/Posts';
import Input from './components/Popup/Input';
import AllPosts from './components/AllPosts/AllPosts';
import PutPost from './components/Popup/PutPost';
import DeletePost from './components/Popup/DeletePost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/" component={Users} />
          <Route path="/posts" component={Posts} />
          <Route path="/input" component={Input} />
          <Route path="/allposts" component={AllPosts} />
          <Route path="/put" component={PutPost} />
          <Route path="/delete" component={DeletePost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
