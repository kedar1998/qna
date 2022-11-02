import {useState} from 'react';
import Question from "./components/Question";
import Data from './components/Data';
function App() {

  const [question, setquestion] = useState(Data);

  return (
    <div className="flex justify-center items-center my-5 px-4">
      <Question data={question}/>
    </div>
  );
}

export default App;
