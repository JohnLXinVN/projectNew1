import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect } from 'react';

import images from '~/assets/images';
import Button from '~/components/Button';
import LevelUp from '../Home/LevelUp';
import styles from './Demo.module.scss';

const cx = classNames.bind(styles);

function Demo() {
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
            <div className={cx('login-demo')}>
                <div className="pt-96 pb-96">
                    <div className={cx('demo-form')}>
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <div className={cx('content')}>
                                        <h1 className={cx('header')}>Schedule a free demo with our specialists</h1>
                                        <h2 className={cx('des')}>
                                            Available today for businesses registered in the EEA, UK, and USA.
                                        </h2>
                                        <div className={cx('lists-item')}>
                                            <div className={cx('item')}>
                                                <div className={cx('icon')}>
                                                    <img src={images.imgDemo1} alt="" />
                                                </div>
                                                <p>Easily connect your bank account</p>
                                            </div>
                                            <div className={cx('item')}>
                                                <div className={cx('icon')}>
                                                    <img src={images.imgDemo2} alt="" />
                                                </div>
                                                <p>Instantly load funds</p>
                                            </div>
                                            <div className={cx('item')}>
                                                <div className={cx('icon')}>
                                                    <img src={images.imgDemo3} alt="" />
                                                </div>
                                                <p>Issue physical & virtual cards</p>
                                            </div>
                                            <div className={cx('item')}>
                                                <div className={cx('icon')}>
                                                    <img src={images.imgDemo4} alt="" />
                                                </div>
                                                <p>Reconcile to your accounting system in real-time</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className={cx('wrap-form')}>
                                        <form action="">
                                            <div className={cx('wrap-row')}>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className={cx('wrap-item')}>
                                                            <label htmlFor="">First name</label>

                                                            <input type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className={cx('wrap-item')}>
                                                            <label htmlFor="">Last name</label>

                                                            <input type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('wrap-row')}>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className={cx('wrap-item')}>
                                                            <label htmlFor="">Work email</label>

                                                            <input type="email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className={cx('wrap-item')}>
                                                            <label htmlFor="">Phone number</label>

                                                            <input type="number" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('wrap-row')}>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className={cx('wrap-item')}>
                                                            <label htmlFor="">Company name</label>

                                                            <input type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className={cx('wrap-item')}>
                                                            <label htmlFor="">Job title</label>

                                                            <select>
                                                                <option value="">Please select...</option>
                                                                <option value="">CEO</option>
                                                                <option value="">COO</option>
                                                                <option value="">TCO</option>
                                                                <option value="">VP</option>
                                                                <option value="">Technology</option>
                                                                <option value="">Partnership Manager</option>
                                                                <option value="">Digital Manager</option>
                                                                <option value="">IT Manager</option>
                                                                <option value="">Business Development Manager</option>
                                                                <option value="">Sales Manager</option>
                                                                <option value="">Other</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('wrap-row')}>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className={cx('wrap-item')}>
                                                            <label htmlFor="">Company size (employee count)</label>

                                                            <select>
                                                                <option value="">Please select...</option>
                                                                <option value="">1-50 employees</option>
                                                                <option value="">51-100 employees</option>
                                                                <option value="">101-200 employees</option>
                                                                <option value="">201-500 employees</option>
                                                                <option value="">501-1000 employees</option>
                                                                <option value="">1001+ employees</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className={cx('wrap-item')}>
                                                            <label htmlFor="">Country</label>

                                                            <select>
                                                                <option value="">Germany</option>
                                                                <option value="">Austria</option>
                                                                <option value="">Switzerland</option>
                                                                <option value="">Ireland</option>
                                                                <option value="">United Kingdom</option>
                                                                <option value="">Spain</option>
                                                                <option value="">France</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('wrap-row')}>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className={cx('wrap-item')}>
                                                            <label htmlFor="">How can we help you?</label>

                                                            <input type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <label htmlFor="" className={cx('checkbox')}>
                                                <input type="checkbox" />
                                                <span>
                                                    I agree to Payhawk's
                                                    <a href="">Terms of Use</a>
                                                    and
                                                    <a href="">Privacy Policy</a>
                                                </span>
                                            </label>
                                        </form>
                                        <div className={cx('btn')}>
                                            <Button noBorder fullWidth bgBlack>
                                                Schedule a demo
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LevelUp />
        </div>
    );
}

export default Demo;
