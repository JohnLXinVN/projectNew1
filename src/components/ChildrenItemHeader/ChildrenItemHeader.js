import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './ChildrenItemHeader.module.scss';

const cx = classNames.bind(styles);

function ChildrenItemHeader({ data }) {
    return (
        <Link className={cx('wrapper')} to={data.to}>
            <div className={cx('icon-wrapper')}>
                <div className={cx('icon')}>{data.icon}</div>
            </div>
            <div className={cx('content')}>
                <div className={cx('title')}>{data.title}</div>
                <div className={cx('des')}>{data.des}</div>
            </div>
        </Link>
    );
}

export default ChildrenItemHeader;
