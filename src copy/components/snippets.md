<script src="https://unpkg.com/react-tabs/dist/react-tabs.development.js" />
<!-- or -->
<script src="https://unpkg.com/react-tabs/dist/react-tabs.production.min.js" />

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'; import
'react-tabs/style/react-tabs.css'; export default () => (
<Tabs>
  <TabList>
    <Tab>Title 1</Tab>
    <Tab>Title 2</Tab>
  </TabList>

  <TabPanel>
    <h2>Any content 1</h2>
  </TabPanel>
  <TabPanel>
    <h2>Any content 2</h2>
  </TabPanel>
</Tabs>
); function Component_example() { return
<div>Hi,I am a Component!</div>
; } export default Component_example; class Component_example extends
React.Component { render() { return
<div>Hi,I am a Component!</div>
; } } export default Component_example;
