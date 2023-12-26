import { useState } from 'react'
import Section from './Section'
import { EXAMPLES } from '../data'
import TabButton from './TabButton'
import Tabs from './Tabs'

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState()

    function handleClick(props) {
        setSelectedTopic(props)
    }

    let tabContent = <p>Please Select a topic.</p>

    if (selectedTopic) {
        tabContent = <div id="tab-content">
            <h3>
                {EXAMPLES[selectedTopic].title}
            </h3>
            <p>
                {EXAMPLES[selectedTopic].description}
            </p>
            <pre>
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
        </div>
    }

    return (
        <Section id='examples' title='EXAMPLES'>
            <Tabs ButtonContainer='menu' buttons={<>
                <TabButton isActive={selectedTopic === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
                <TabButton isActive={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
                <TabButton isActive={selectedTopic === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
                <TabButton isActive={selectedTopic === 'state'} onClick={() => handleClick('state')}>State</TabButton>
            </>} >
                {tabContent}</Tabs>
        </Section>
    )
}