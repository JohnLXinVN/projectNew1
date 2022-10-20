import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './ListItemCard.module.scss';

const cx = classNames.bind(styles);

function ListItemCard() {
    return (
        <div className={cx('list-item')}>
            <div className={cx('item')}>
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faCheck} />
                </div>
                <h3 className={cx('content-item')}>Easy trip reimbursement in a matter of clicks</h3>
            </div>
            <div className={cx('item')}>
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faCheck} />
                </div>
                <h3 className={cx('content-item')}>The ab business policy</h3>
            </div>
            <div className={cx('item')}>
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faCheck} />
                </div>
                <h3 className={cx('content-item')}>Easy journey tracking</h3>
            </div>
            <div className={cx('item')}>
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faCheck} />
                </div>
                <h3 className={cx('content-item')}>Automatic cost calculations</h3>
            </div>
        </div>
    );
}

export default ListItemCard;
