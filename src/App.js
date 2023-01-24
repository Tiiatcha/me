import './App.css';
import SectionEducation from './components/SectionEducation'
import SectionExperience from './components/SectionExperience'

function App() {
  return (
    <div className="">
      <SectionEducation
                title="Education"
                data={[
                    {school:'School 1', qualification:'qualification 1', grade:'pass'},
                    {school:'School 2', qualification:'qualification 2', grade:'pass'}
                ]}
            />
            <SectionExperience 
                title="Experiences"
                data={[
                    {employer:'Cadent Gas', role:'Lead Performance and Reporting MI Developer', start:'06/2011',end:'present'},
                    {employer:'Job 2', role:'role 2', reponsibilities:'pass'},
                ]}
            />
    </div>
  );
}

export default App;
