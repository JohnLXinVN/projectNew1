import classNames from 'classnames/bind';
import Button from '~/components/Button';
import HeaderText from '../HeaderText';

import styles from './FormSubmit.module.scss';

const cx = classNames.bind(styles);

function FormSubmit({ heading, title, des, img }) {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                {heading && (
                    <div className="container">
                        <div className={cx('heading-wrap')}>
                            <h1>{heading}</h1>
                        </div>
                    </div>
                )}

                <div className="row">
                    <div className="col-6">
                        <div className={cx('content')}>
                            {title && <h3 className={cx('title')}>{title}</h3>}
                            {des && <div className={cx('des')}>{des}</div>}
                            <div className={cx('wrap-img')}>
                                <img src={img} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
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
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormSubmit;
