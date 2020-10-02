import React, { createElement, ReactNode, ReactHTML } from 'react';
import classNames from 'classnames';

interface ITextProps {
  children?: ReactNode | string,
  size?: 1 | 2 | 3 | 4,
  className?: string,
  elementName?: keyof ReactHTML,
  isBold?: boolean
}

const Text = ({
  children,
  size = 2,
  className='',
  elementName = 'p',
  isBold = false
}: ITextProps): JSX.Element => {
  const props = {
    className: classNames(
      `text-body-${size} heading-body-${size}`,
      {
        "font-600": isBold
      },
      className
    )
  };

  return createElement(elementName, props, children);
}


export default Text
