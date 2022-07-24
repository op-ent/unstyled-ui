import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { useTheme } from '../../context/theme';
import {
  ButtonComponent,
  FullButtonProps,
} from '../../types/components/button';
import { PolymorphicRef } from '../../types/polymorphic';

export const Button: ButtonComponent = forwardRef(
  <C extends React.ElementType>(
    props: FullButtonProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    // 1. Initialization
    const { button } = useTheme();
    const { defaultProps, styles } = button;
    const { base, variants, sizes } = styles;

    // 2. Props
    const {
      as = defaultProps.as!,
      children,
      variant = defaultProps.variant!,
      size = defaultProps.size!,
      color = defaultProps.color!,
      block = defaultProps.block,
      disabled = defaultProps.disabled,
      loading = defaultProps.loading,
      className,
      type,
      ...rest
    } = props;

    // 3. styles
    const buttonBase = base!.initial;
    const buttonBlock = block && base!.block;
    const buttonVariant = variants![variant][color];
    const buttonSize = sizes![size];
    const classes = clsx(
      buttonBase,
      buttonBlock,
      buttonVariant,
      buttonSize,
      className
    );

    // 4. Render
    const attrs = { ref, disabled, ...rest };
    const Component = as;
    return (
      <Component
        {...attrs}
        className={classes}
        type={type || (as === 'button' ? as : undefined)}
      >
        {children}
      </Component>
    );
  }
);
