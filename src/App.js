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

/* FRÅGOR OM PROPS */
import FunctionalQuestionOne from './component/FunctionalQuestionOne';
import FunctionalQuestionTwo from './component/FunctionalQuestionTwo';

import ClassQuestionOne from './component/ClassQuestionOne';
import ClassQuestionTwo from './component/ClassQuestionTwo';

// dag 2
import StateCounterClass from './component/StateCounterClass';

import StateCounterFunction from './component/StateCounterFunction';

import FunctionEvent from './component/FunctionEvent';

/* FRÅGOR OM EVENTS */
import EvenQuestionOne from './component/EventQuestionOne';
import EventQuestionTwo from './component/EventQuestionTwo';

// WEEK 2 (13) Condtitional Rendering & List rendering
import ConditionalRenderingOne from './component/ConditionalRenderingOne';
import ConditionalRenderingTwo from './component/ConditionalRenderingTwo';

// LESSON WEEK 2 MED RICHARD
import ClassConditionalRenderingLessonOne from './component/ClassConditionalRenderingLessonOne';
import ClassConditionalRenderingLessonTwo from './component/ClassConditionalRenderingLessonTwo';
import ClassConditionalRenderingLessonThree from './component/ClassConditionalRenderingLessonThree';

import FunctionalListRenderingLessonOne from './component/FunctionalListRenderingLessonOne';
import FunctionalListRenderingLessonTwo from './component/FunctionalListRenderingLessonTwo';
import FunctionalListRenderingLessonThree from './component/FunctionalListRenderingLessonThree';

// hämtar in komponenten
function App() {
  return (
    <div className="App">

        {/* 1:a Veckan - Komponenter (Functional & Class) & Props */}
        <Functional />
        <ClassComponent />
        <FunctionalProps name="Detta kommer från en prop"/>
        <MoreFunctionalProps first="Prop 1" last="Prop 2"/>

        <FunctionalPropsChildren first="Prop 1" last="Prop 2" children="Detta kommer från en child"/>

        <ClassComponentProps text="Detta kommer från en klass prop"/>

        <FunctionalComponentProps message="Meddelande från förälder i en functional component" />

        <ClassAndProps message="Meddelande från förälder i en class component" />

        {/* SVAR OM PROPS */}
        <FunctionalQuestionOne myName="Christopher"/>
        <FunctionalQuestionTwo firstName="Christopher" surName="Rönnberg" />

        <ClassQuestionOne myName="Christopher" />
        <ClassQuestionTwo firstName="Christopher" surName="Rönnberg" />

        {/* detta skapas med shift + alt + a */}

        {/* Dag två State & Events */}

        <StateCounterClass />
        <StateCounterFunction />
        <FunctionEvent />

        {/* SVAR OM EVENT */}
        <EvenQuestionOne />
        <EventQuestionTwo />


        {/* Conditional Rendering typ v-if */}
        <ConditionalRenderingOne />

        {/* conditonal rendering ? : */}
        <ConditionalRenderingTwo />

        <ClassConditionalRenderingLessonOne />
        <ClassConditionalRenderingLessonTwo />
        <ClassConditionalRenderingLessonThree />

        <FunctionalListRenderingLessonOne />
        <FunctionalListRenderingLessonTwo />
        <FunctionalListRenderingLessonThree />
    </div>
  );
}

export default App;
