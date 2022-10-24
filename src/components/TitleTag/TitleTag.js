import classNames from 'classnames/bind';

import styles from './TitleTag.module.scss';

const cx = classNames.bind(styles);

function TitleTag({ data }) {
    return <div className={cx('wrapper')}>{data}</div>;
}

export default TitleTag;
