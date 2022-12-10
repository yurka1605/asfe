import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { componentWrapperDecorator, Meta, Story } from '@storybook/angular';
import { CheckboxComponent } from 'src/app/shared/components/input/checkbox/checkbox.component';

export default {
  title: 'Checkbox',
  component: CheckboxComponent,
  parameters: {
    cssVariables: {
      theme: 'Light Theme'
    }
  },
  decorators: [componentWrapperDecorator((story) => `<div style="width: 150px">${story}</div>`)],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
} as Meta;

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Checkbox',
};
