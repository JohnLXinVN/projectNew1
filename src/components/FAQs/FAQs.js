import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './FAQs.module.scss';

const cx = classNames.bind(styles);

function FAQs({ header, headerContent1, content1, headerContent2, content2 }) {
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
                <div className={cx('header')}>{header}</div>
                <div className="row">
                    <div className="shift-1">
                        <div className={cx('item')}>
                            <div onClick={handleClick1} className={cx('title')}>
                                <h2>{headerContent1}</h2>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                            {open1 && (
                                <div className={cx('des')}>
                                    <p>{content1}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="shift-1">
                        <div className={cx('item')}>
                            <div onClick={handleClick2} className={cx('title')}>
                                <h2>{headerContent2}</h2>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                            {open2 && (
                                <div className={cx('des')}>
                                    <p>{content2}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQs;
