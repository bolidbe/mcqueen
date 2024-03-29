import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { CheckIcon, WarningOutlineIcon, InfoOutlineIcon } from '@bolid/mcqueen-icons/dist/es';

import styles from './Alert.module.scss';

export interface AlertPropsType {
  children?: ReactNode;
  theme?: 'success' | 'caution' | 'warning' | 'info';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  style?: React.CSSProperties;
}

const ALERT_ICONS = {
  success: <CheckIcon size="medium" className={styles.icon} />,
  caution: <WarningOutlineIcon size="medium" className={styles.icon} />,
  warning: <WarningOutlineIcon size="medium" className={styles.icon} />,
  info: <InfoOutlineIcon size="medium" className={styles.icon} />,
};

export default function Alert({
  children,
  theme = 'info',
  className,
  onClick,
  style
}: AlertPropsType): JSX.Element {
  return (
    <div
      className={classNames({
        [styles.alert]: true,
        [styles.alertStateSuccess]: theme === 'success',
        [styles.alertStateCaution]: theme === 'caution',
        [styles.alertStateWarning]: theme === 'warning',
        [styles.alertStateInfo]: theme === 'info',
      }, className)}
      style={style}
      onClick={onClick}
    >
      { ALERT_ICONS[theme] }
      <div className={styles.text}>{ children }</div>
    </div>
  );
}
