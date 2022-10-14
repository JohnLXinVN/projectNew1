import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import styles from './OftenAsk.module.scss';

const cx = classNames.bind(styles);

function OftenAsk() {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    const handleClick1 = () => {
        setOpen1(!open1);
    };
    const handleClick2 = () => {
        setOpen2(!open2);
    };

    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className={cx('header')}>What CFOs often ask about</div>
                <div className="row">
                    <div className="shift-1">
                        <div className={cx('item')}>
                            <div onClick={handleClick1} className={cx('title')}>
                                <h2>What is in the package?</h2>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                            {open1 && (
                                <div className={cx('des')}>
                                    <p>
                                        Payment accounts in EUR and GBP with your own dedicated IBANs. You also get a
                                        cloud-based web portal, mobile app for employees, and Visa Commercial debit and
                                        credit cards.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="shift-1">
                        <div className={cx('item')}>
                            <div onClick={handleClick2} className={cx('title')}>
                                <h2>What is in the package?</h2>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                            {open2 && (
                                <div className={cx('des')}>
                                    <p>
                                        Payment accounts in EUR and GBP with your own dedicated IBANs. You also get a
                                        cloud-based web portal, mobile app for employees, and Visa Commercial debit and
                                        credit cards.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OftenAsk;
