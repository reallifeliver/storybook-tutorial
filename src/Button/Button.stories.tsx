import React from 'react';
import Button from './Button';
import {withKnobs, text, boolean, select} from '@storybook/addon-knobs'
import {action} from '@storybook/addon-actions';

/** @jsx jsx */
import {jsx, css} from '@emotion/core';

export default {
    title: 'components|Button',
    component: Button,
    decorators: [withKnobs],
};

export const button = () => {
    const label =text('children', 'BUTTON');
    const size = select('size', ['small', 'medium', 'large'], 'medium');
    const theme = select(
        'theme',
        ['primary', 'secondary', 'tertiary'],
        'primary'
    );
    const disabled = boolean('disabled', false);
    const width = text('width', '');

    return (
        <Button
            size={size}
            width={width}
            disabled={disabled}
            theme={theme}
            onClick={action('onClick')}
        >
            {label}
        </Button>
    )
};

button.story = {
    name: 'Default'
};

export const primaryButton = () => {
    return <Button>PRIMARY</Button>
};

export const secondaryButton = () => {
    return <Button theme='secondary'>Secondary</Button>
};

export const tertiaryButton = () => {
    return <Button theme="tertiary">TERTIARY</Button>;
};

const buttonWrapper = css`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;


export const sizes = () => {
    return (
        <div css={buttonWrapper}>
            <div>
                <div className='description'>Small</div>
                <Button size='small'>Button</Button>
            </div>
            <div>
                <div className='description'>Medium</div>
                <Button size='medium'>Button</Button>
            </div>
            <div>
                <div className='description'>Large</div>
                <Button size='large'>Button</Button>
            </div>
        </div>

    );
};

export const disabled = () => {
    return (
        <div css={buttonWrapper}>
            <div>
                <Button disabled>PRIMARY</Button>
            </div>
            <div>
                <Button disabled theme='secondary'>SECONDARY</Button>
            </div>
            <div>
                <Button disabled theme='tertiary'>TERTIARY</Button>
            </div>
        </div>
    )
}

export const customedSized = () => {
    return (
        <div css={buttonWrapper}>
            <div>
                <Button width='20rem'>CUSTOM WIDTH</Button>
            </div>
            <div>
                <Button width='100%'>FUll WIDTH</Button>
            </div>
        </div>
    )
}