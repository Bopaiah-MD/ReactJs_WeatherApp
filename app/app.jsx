var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('app/components/Main.jsx');
var Weather = require('app/components/Weather.jsx');
var About = require('app/components/About.jsx');
var Examples = require('app/components/Examples.jsx');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
       <Route path="about" component={About}/>
       <Route path="Examples" component={Examples}/>

           <IndexRoute component={Weather}/>
       </Route>
  </Router>,
  document.getElementById('app')
);
