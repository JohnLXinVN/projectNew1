import classNames from 'classnames/bind';
import { useEffect } from 'react';

import HeaderText from '~/components/HeaderText';
import LevelUp from '../Home/LevelUp';
import styles from './Customers.module.scss';
import CustomersSlider from './CustomersSlider';
import IndustryFilter from './IndustryFilter';

const cx = classNames.bind(styles);

function Customers() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
    };

    useEffect(() => {
        scrollToTop();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className="bg-black-green text-while">
                <HeaderText title="Customer stories" des="Discover Payhawk through the eyes of our customers" />
                <CustomersSlider />
            </div>
            <div className={cx('stats-wrapper')}>
                <div className={cx('stats')}>
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <div className={cx('block-item')}>
                                    <h1>99%</h1>
                                    <h5>More control on company expenses</h5>
                                    <div className={cx('des')}>
                                        <p>Financial managers enjoy real-time expense control.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className={cx('block-item')}>
                                    <h1>9/10</h1>
                                    <h5>Find Payhawk's interface easy to use</h5>
                                    <div className={cx('des')}>
                                        <p>The web platform and mobile app are simple and intuitive.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className={cx('block-item')}>
                                    <h1>100%</h1>
                                    <h5>Of employees love cards</h5>
                                    <div className={cx('des')}>
                                        <p>
                                            Employees love to use a company card rather than wait for months to be
                                            reimbursed.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HeaderText title="Don’t take our word for it." des="Here's what our clients are saying:" />
            <IndustryFilter />
            <LevelUp />
        </div>
    );
}

export default Customers;
