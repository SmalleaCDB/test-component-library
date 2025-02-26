import React from 'react';
import NewButton from '../src/components/NewButton';

export default {
  title: 'NewButton',
  component: NewButton,
};

const Template = (args) => <NewButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Click Me!',
  onClick: () => alert('Button clicked!'),
};
