import React from 'react';
import { shallow } from 'enzyme';
import CollectionsOverview  from './collections-overview.component';

console.log(CollectionsOverview);
it('should render CollectionsOverview component', () => {
  expect(shallow(<CollectionsOverview collections={[]} />)).toMatchSnapshot();
});