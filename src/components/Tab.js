import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { MyMap } from 'react';
export default () => (
  <Tabs>
    <TabList>
      <Tab>REVIEWS</Tab>
      <Tab>Best Seller</Tab>
      <Tab>More</Tab>
      <Tab>Location</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
    <TabPanel>
      <h2>Map that show the shop location</h2>
      
    </TabPanel>
  </Tabs>
);