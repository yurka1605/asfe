import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { LabelComponent } from 'src/app/shared/components/input/label/label.component';
import { InputComponent } from 'src/app/shared/components/input/text/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export default {
  title: 'Input',
  component: InputComponent,
  parameters: {
    cssVariables: {
      theme: 'Light Theme'
    }
  },
  decorators: [
    moduleMetadata({
      declarations: [LabelComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Text',
};
