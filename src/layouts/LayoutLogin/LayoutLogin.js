import classNames from 'classnames/bind';

import styles from './LayoutLogin.module.scss';

const cx = classNames.bind(styles);

function LayoutLogin({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default LayoutLogin;
