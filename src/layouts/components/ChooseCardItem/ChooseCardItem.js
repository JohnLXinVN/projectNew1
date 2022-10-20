import classNames from 'classnames/bind';

import styles from './ChooseCardItem.module.scss';

const cx = classNames.bind(styles);

function ChooseCardItem({ img, content, des }) {
    return (
        <div className={cx('item')}>
            <div className={cx('icon')}>
                <img src={img} alt="icon" />
            </div>
            <div className={cx('content')}>{content}</div>
            {des && <div className={cx('des')}>{des}</div>}
        </div>
    );
}

export default ChooseCardItem;
