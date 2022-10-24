import classNames from 'classnames/bind';
import TitleTag from '../TitleTag';

import styles from './HeaderText.module.scss';

const cx = classNames.bind(styles);

function HeaderText({ title, des, tag, colorWhile }) {
    return (
        <div className={cx('header', colorWhile && 'colorWhile')}>
            {tag && <TitleTag data={tag} />}
            <h1>{title}</h1>
            {des && <h3>{des}</h3>}
        </div>
    );
}

export default HeaderText;
