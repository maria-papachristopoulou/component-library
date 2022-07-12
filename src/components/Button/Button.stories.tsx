import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ComponentLibrary/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Kiosk = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Kiosk.args = {
    label: 'Kiosk Button!',
    test: 'lala'
};

export const Website = Template.bind({});
Website.args = {
    label: 'Website Button',
    test: 'lala'
};

