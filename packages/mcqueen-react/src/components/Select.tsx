import React, { ReactNode } from 'react';
import classNames from 'classnames';
import Label from "./Label"
import InputNote from "./InputNote"
import { noop } from 'lodash';

import styles from './Select.module.scss';

const getUIState = ({
  isDisabled,
  hasError,
}: Pick<SelectPropsType, 'isDisabled' | 'hasError'>): 'disabled' | 'error' | 'default' => {
  if (!!isDisabled) {
    return 'disabled';
  }

  if (!!hasError) {
    return 'error';
  }

  return 'default';
};

export interface SelectPropsType {
  children?: ReactNode;
  id?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  hasError?: boolean;
  size?: 'small' | 'large';
  value?: string;
  onClick?: () => void;
  onChange?: (value: string, event: React.ChangeEvent<HTMLSelectElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  name?: string;
  className?: string;
  label?: ReactNode;
  note?: ReactNode;
}

export default React.forwardRef<HTMLSelectElement, SelectPropsType>(
  function Select(
    {
      children,
      hasError,
      id,
      isDisabled,
      isRequired,
      name,
      onChange = noop,
      onFocus = noop,
      onBlur = noop,
      onClick = noop,
      size = 'large',
      value,
      className,
      label,
      note
    }: SelectPropsType,
    outerRef
  ): JSX.Element {
    const uiState = getUIState({ isDisabled, hasError });

    return (
      <div className={className}>
        {label && (
          <Label {...{ hasError, isDisabled }} className="mb-1">{ label }</Label>
        )}
        <div className="relative">
          <select
            className={classNames({
              [styles.select]: true,
              [styles.selectStateDisabled]: uiState === 'disabled',
              [styles.selectStateError]: uiState === 'error',
              [styles.selectStateDefault]: uiState === 'default',
              [styles.selectSizeSmall]: size === 'small',
              [styles.selectSizeLarge]: size === 'large',
            })}
            id={id}
            ref={outerRef}
            disabled={isDisabled}
            required={isRequired}
            value={value}
            onClick={onClick}
            onChange={(e): void => onChange(e.target.value, e)}
            onFocus={onFocus}
            onBlur={onBlur}
            name={name}
          >
            {children}
          </select>
          {
            <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                className={classNames(styles.caret, {
                  [styles.caretStateDefault]: uiState === "default",
                  [styles.caretStateDisabled]: uiState === "disabled",
                  [styles.caretStateError]: uiState === "error"
                })}
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          }
        </div>
        {note && (
          <InputNote className="mt-1" hasError={hasError}>{ note }</InputNote>
        )}
      </div>
    )
  }
)
