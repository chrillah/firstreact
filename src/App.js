import './App.css';

// Importerar komponenter för att använda dem
import Functional from './component/Functional';

import ClassComponent from './component/ClassComponent';

import FunctionalProps from './component/FunctionalProps';

import MoreFunctionalProps from './component/MoreFuntcionalProps';

import FunctionalPropsChildren from './component/FunctionalPropsChildren';

import ClassComponentProps from './component/ClassComponentProps';

import FunctionalComponentProps from './component/FunctionalComponentProps';

import ClassAndProps from './component/ClassAndProps';

// hämtar in komponenten
function App() {
  return (
    <div className="App">
        <Functional />
        <ClassComponent />
        <FunctionalProps name="Detta kommer från en prop"/>
        <MoreFunctionalProps first="Prop 1" last="Prop 2"/>

        <FunctionalPropsChildren first="Prop 1" last="Prop 2" children="Detta kommer från en child"/>

        <ClassComponentProps text="Detta kommer från en klass prop"/>

        <FunctionalComponentProps message="Meddelande från förälder i en functional component" />

        <ClassAndProps message="Meddelande från förälder i en class component" />

        {/* detta skapas med shift + alt + a */}
    </div>
  );
}

export default App;
