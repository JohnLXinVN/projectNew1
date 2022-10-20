import classNames from 'classnames/bind';

import styles from './HeaderText.module.scss';

const cx = classNames.bind(styles);

function HeaderText({ title, des }) {
    return (
        <div className={cx('header')}>
            <h1>{title}</h1>
            {des && <h3>{des}</h3>}
        </div>
    );
}

export default HeaderText;
