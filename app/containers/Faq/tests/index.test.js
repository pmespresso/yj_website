import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from '../messages';
import FAQ from '../index';

describe('<FAQ />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(
      <FAQ />
    );
    expect(renderedComponent.contains(
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    )).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(
      <FAQ />
    );
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
