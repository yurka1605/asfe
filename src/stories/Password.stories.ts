import { CheckboxComponent } from './../app/shared/components/input/checkbox/checkbox.component';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { LabelComponent } from 'src/app/shared/components/input/label/label.component';
import { PasswordComponent } from 'src/app/shared/components/input/password/password.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

export default {
  title: 'Password',
  component: PasswordComponent,
  parameters: {
    cssVariables: {
      theme: 'Light Theme'
    }
  },
  decorators: [
    moduleMetadata({
      declarations: [PasswordComponent, LabelComponent, CheckboxComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<PasswordComponent> = (args: PasswordComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Password',
  showToggle: true,
};
