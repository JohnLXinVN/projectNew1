import classNames from 'classnames/bind';

import styles from './EasyExpenseReporting.module.scss';
import HeaderText from '~/components/HeaderText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import { useState } from 'react';

const cx = classNames.bind(styles);

function EasyExpenseReporting() {
    const [appear1, setAppear1] = useState(false);

    const handleClick1 = () => {
        setAppear1(!appear1);
    };
    const [appear2, setAppear2] = useState(false);

    const handleClick2 = () => {
        setAppear2(!appear2);
    };
    const [appear3, setAppear3] = useState(false);

    const handleClick3 = () => {
        setAppear3(!appear3);
    };
    const [appear4, setAppear4] = useState(false);

    const handleClick4 = () => {
        setAppear4(!appear4);
    };

    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <HeaderText
                    title="Easy expense reporting"
                    des="Say goodbye to piles of paper receipts with all-in-one software for corporate expense management and reporting."
                />
                <div className="row">
                    <div className="col-6">
                        <div className={cx('list-item')}>
                            <div className={cx('item')}>
                                <div onClick={handleClick1} className={cx('block-header')}>
                                    <h4 className={cx('heading')}>Manage receipts and documents</h4>
                                    <FontAwesomeIcon className={cx('icon', appear1 && 'active')} icon={faChevronDown} />
                                </div>
                                <p className={cx('content', appear1 && 'open')}>
                                    Minimise manual workload with pre-accounting OCR software that reads uploaded
                                    documents in 60+ languages and automates reports.
                                </p>
                            </div>
                            <div className={cx('item')}>
                                <div onClick={handleClick2} className={cx('block-header')}>
                                    <h4 className={cx('heading')}>Manage receipts and documents</h4>
                                    <FontAwesomeIcon className={cx('icon', appear2 && 'active')} icon={faChevronDown} />
                                </div>
                                <p className={cx('content', appear2 && 'open')}>
                                    Minimise manual workload with pre-accounting OCR software that reads uploaded
                                    documents in 60+ languages and automates reports.
                                </p>
                            </div>
                            <div className={cx('item')}>
                                <div onClick={handleClick3} className={cx('block-header')}>
                                    <h4 className={cx('heading')}>Manage receipts and documents</h4>
                                    <FontAwesomeIcon className={cx('icon', appear3 && 'active')} icon={faChevronDown} />
                                </div>
                                <p className={cx('content', appear3 && 'open')}>
                                    Minimise manual workload with pre-accounting OCR software that reads uploaded
                                    documents in 60+ languages and automates reports.
                                </p>
                            </div>
                            <div className={cx('item')}>
                                <div onClick={handleClick4} className={cx('block-header')}>
                                    <h4 className={cx('heading')}>Manage receipts and documents</h4>
                                    <FontAwesomeIcon className={cx('icon', appear4 && 'active')} icon={faChevronDown} />
                                </div>
                                <p className={cx('content', appear4 && 'open')}>
                                    Minimise manual workload with pre-accounting OCR software that reads uploaded
                                    documents in 60+ languages and automates reports.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={cx('block-img')}>
                            <img src={images.imgProductCard8} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EasyExpenseReporting;
