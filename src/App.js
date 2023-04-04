import './App.css'

// Importerar komponenter för att använda dem
import Functional from './component/Functional'

import ClassComponent from './component/ClassComponent'

import FunctionalProps from './component/FunctionalProps'

import MoreFunctionalProps from './component/MoreFuntcionalProps'

import FunctionalPropsChildren from './component/FunctionalPropsChildren'

import ClassComponentProps from './component/ClassComponentProps'

import FunctionalComponentProps from './component/FunctionalComponentProps'

import ClassAndProps from './component/ClassAndProps'

/* FRÅGOR OM PROPS */
import FunctionalQuestionOne from './component/FunctionalQuestionOne'
import FunctionalQuestionTwo from './component/FunctionalQuestionTwo'

import ClassQuestionOne from './component/ClassQuestionOne'
import ClassQuestionTwo from './component/ClassQuestionTwo'

// dag 2
import StateCounterClass from './component/StateCounterClass'

import StateCounterFunction from './component/StateCounterFunction'

import FunctionEvent from './component/FunctionEvent'

/* FRÅGOR OM EVENTS */
import EvenQuestionOne from './component/EventQuestionOne'
import EventQuestionTwo from './component/EventQuestionTwo'

// WEEK 2 (13) Condtitional Rendering & List rendering
import ConditionalRenderingOne from './component/ConditionalRenderingOne'
import ConditionalRenderingTwo from './component/ConditionalRenderingTwo'

// LESSON WEEK 2 MED RICHARD
import ClassConditionalRenderingLessonOne from './component/ClassConditionalRenderingLessonOne'
import ClassConditionalRenderingLessonTwo from './component/ClassConditionalRenderingLessonTwo'
import ClassConditionalRenderingLessonThree from './component/ClassConditionalRenderingLessonThree'

import FunctionalListRenderingLessonOne from './component/FunctionalListRenderingLessonOne'
import FunctionalListRenderingLessonTwo from './component/FunctionalListRenderingLessonTwo'
import FunctionalListRenderingLessonThree from './component/FunctionalListRenderingLessonThree'
import FunctionalListRenderingLessonFour from './component/FunctionalListRenderingLessonFour'

// testa själv
import FunctionalListRenderingCities from './component/FunctionalListRenderingCities'

// GENOMGÅNG vecka 2 (13)
import FunctionalFormHandlerLessonOne from './component/FunctionalFormHandlerLessonOne'
import FunctionalFormValidationLessonTwo from './component/FunctionalFormValidationLessonTwo'

import FunctionalInlineStylingLessonThree from './component/FunctionalInlineStylingLessonThree'
import FunctionalStyledComponentLessonFour from './component/FunctionalStyledComponentLessonFour'

// React Router
import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ErrorPage from './pages/ErrorPage'

import { UserInfo } from './UserInfo'

// hämtar in komponenten
function App() {
    return (
        <div className="App">
            {/* 1:a Veckan - Komponenter (Functional & Class) & Props */}
            <Functional />
            <ClassComponent />
            <FunctionalProps name="Detta kommer från en prop" />
            <MoreFunctionalProps first="Prop 1" last="Prop 2" />

            <FunctionalPropsChildren
                first="Prop 1"
                last="Prop 2"
                children="Detta kommer från en child"
            />

            <ClassComponentProps text="Detta kommer från en klass prop" />

            <FunctionalComponentProps message="Meddelande från förälder i en functional component" />

            <ClassAndProps message="Meddelande från förälder i en class component" />

            {/* SVAR OM PROPS */}
            <FunctionalQuestionOne myName="Christopher" />
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
            <FunctionalListRenderingLessonFour />

            {/* testar själv */}
            <FunctionalListRenderingCities />

            {/* GENOMGÅNG */}
            <FunctionalFormHandlerLessonOne />
            <FunctionalFormValidationLessonTwo />

            <FunctionalInlineStylingLessonThree />
            <FunctionalStyledComponentLessonFour />
                {/* React Router - nya sättet */}
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/products'}>Products</Link>
                    </li>
                </ul>
            </nav>
            <UserInfo.Provider value={'Hell'}>

                <Routes>
                    <Route path="/" element={<Home firstName={"Christopher"} counter={1}/>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products/:id" element={<Products />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </UserInfo.Provider>
        </div>
    )
}

export default App
