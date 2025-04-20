import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './Button';
import { FaPlus, FaTimes } from 'react-icons/fa';

const meta: Meta<ButtonProps> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A versatile button for primary, secondary, danger, ghost, link or outline styles.'
      }
    },
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'ghost', 'link', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    leftIcon: {
      control: 'object',
    },
    rightIcon: {
      control: 'object',
    },
    iconOnly: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    onClick: {
      action: 'clicked',
      table: { type: { summary: '() => void' } },
    },
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: { children: 'Primary', variant: 'primary', size: 'md' },
  render: (args) => (
    <Button {...args} onClick={() => alert('Button clicked!')}>
      {args.children}
    </Button>
  ),
};

export const Secondary: Story = {
  args: { children: 'Secondary', variant: 'secondary', size: 'md' },
  render: (args) => (
    <Button {...args} onClick={() => alert('Button clicked!')}>
      {args.children}
    </Button>
  ),
};

export const Danger: Story = {
  args: { children: 'Danger', variant: 'danger', size: 'md' },
  render: (args) => (
    <Button {...args} onClick={() => alert('Button clicked!')}>
      {args.children}
    </Button>
  ),
};

export const Ghost: Story = {
  args: { children: 'Ghost', variant: 'ghost', size: 'md' },
  render: (args) => (
    <Button {...args} onClick={() => alert('Button clicked!')}>
      {args.children}
    </Button>
  ),
};

export const Link: Story = {
  args: { children: 'Link', variant: 'link', size: 'md' },
  render: (args) => (
    <Button {...args} onClick={() => alert('Button clicked!')}>
      {args.children}
    </Button>
  ),
};

export const Outline: Story = {
  args: { children: 'Outline', variant: 'outline', size: 'md' },
  render: (args) => (
    <Button {...args} onClick={() => alert('Button clicked!')}>
      {args.children}
    </Button>
  ),
};

export const WithIcon: Story = {
  args: { children: 'Add', leftIcon: <FaPlus />, variant: 'primary', size: 'md' },
  render: (args) => (
    <Button {...args} onClick={() => alert('Button clicked!')}>
      {args.children}
    </Button>
  ),
};

export const IconOnly: Story = {
  args: { iconOnly: true, leftIcon: <FaTimes />, variant: 'ghost', size: 'md' },
  render: (args) => (
    <Button {...args} onClick={() => alert('Button clicked!')}>
      {args.children}
    </Button>
  ),
};

export const FullWidth: Story = {
  args: { children: 'Full Width', variant: 'primary', size: 'md', fullWidth: true },
  render: (args) => (
    <Button {...args} onClick={() => alert('Button clicked!')}>
      {args.children}
    </Button>
  ),
};

export const Disabled: Story = {
  args: { children: 'Disabled', variant: 'primary', size: 'md', disabled: true },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 5 }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
