import { useState } from 'react';
import Header from './Components/Header/Header.jsx';
import { CORE_CONCEPTS } from './data.js'
import CoreConcept from './Components/CoreConcept.jsx';
import TabButton from './Components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
 const [selectedTopic,setSelectedTopic]= useState();
  
  function handleClick(clickedButton){
    setSelectedTopic(clickedButton);
    // console.log(selectedTopic)
  }
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts!</h2>
          <ul>
            <CoreConcept 
            image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title} 
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept
              image={CORE_CONCEPTS[1].image}
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
            />
            <CoreConcept
              image={CORE_CONCEPTS[2].image}
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
            />
            <CoreConcept
              image={CORE_CONCEPTS[3].image}
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
            />
            
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton onClick={ () => handleClick('components')}>Components</TabButton>
            <TabButton onClick={()=> handleClick('jsx')}>JSX</TabButton>
            <TabButton onClick={ () => handleClick('props')}>Props</TabButton>
            <TabButton onClick={ () => handleClick('state')}>State</TabButton>
          </menu>
          
            {!selectedTopic ? (<p>Please select a topic. </p>): 
            (<div id="tab-content">
              <h3>{ EXAMPLES[selectedTopic].title}</h3>
            <p>{ EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
            </div>)
          }
          
        </section>

      </main>
    </div>
  );
}

export default App;