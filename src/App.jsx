
import { CORE_CONCEPTS } from './data';
import Header from './Header.jsx';
import CoreConcept from './CoreConcerpt.jsx';
import TabButton from './tabButton.jsx';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id='core-concepts'>
          <h2>Core Concept</h2>
          <ul>
            <CoreConcept
              {...CORE_CONCEPTS[0]}
            />
            <CoreConcept
              {...CORE_CONCEPTS[1]}
            />
              <CoreConcept
              {...CORE_CONCEPTS[2]}
            />
              <CoreConcept
              {...CORE_CONCEPTS[3]}
            />
          </ul>
        </section>

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <li>
              <TabButton>Component</TabButton>
              <TabButton>JSX</TabButton>
              <TabButton>Props</TabButton>
              <TabButton>State</TabButton>
            </li>
          </menu>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
