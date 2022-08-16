import './App.css';
import Components from './components/components';
import ConditionalRendering from './components/conditionalrendering';
import ArrayMethods from './components/ES6/arraymethods';
import ArrowFunction from './components/ES6/arrowfunction';
import Classes from './components/ES6/classes';
import Destructuring from './components/ES6/destructuring';
import Modules from './components/ES6/modules';
import SpreadOperator from './components/ES6/spreadoperator';
import TernaryOperators from './components/ES6/ternaryoperators';
import Variables from './components/ES6/variables';
import Events from './components/events';
import Intro from './components/intro';
import JSXintro from './components/jsxintro';
import Lists from './components/lists';
import Props from './components/props';

function App() {
  return (
    <>
      <Intro/>
      <Classes/>
      <ArrowFunction/>
      <Variables/>
      <ArrayMethods/>
      <Destructuring/>
      <SpreadOperator/>
      <Modules/>
      <TernaryOperators/>
      <JSXintro/>
      <Components/>
      <Props/>
      <Events/>
      <ConditionalRendering/>
      <Lists/>
    </>
  );
}

export default App;
