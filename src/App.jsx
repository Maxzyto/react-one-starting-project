import { useState } from 'react';

import { CORE_CONCEPTS } from "./data";
import Header from "./Header.jsx";
import CoreConcept from "./CoreConcerpt.jsx";
import TabButton from "./tabButton.jsx";
import { EXAMPLES } from './data';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', jxs, props, state
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
    
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('component')}>Component</TabButton>
            <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
         
          {!selectedTopic ? <p>Please select a topic.</p> : null}
          {selectedTopic ? (
             <div id='tab-content'>
            <h3>{ EXAMPLES[selectedTopic].title }</h3>
            <p>{ EXAMPLES[selectedTopic].description }</p>
            <pre>
              <code>
                { EXAMPLES[selectedTopic].code }
              </code>
            </pre>
          </div> 
          ) : null}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
