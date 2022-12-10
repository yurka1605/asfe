import { componentWrapperDecorator, Meta, Story } from '@storybook/angular';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

export default {
  title: 'Button',
  component: ButtonComponent,
  parameters: {
    cssVariables: {
      theme: 'Light Theme'
    }
  },
  decorators: [componentWrapperDecorator((story) => `<div style="width: 150px">${story}</div>`)],
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  secondary: false,
};

