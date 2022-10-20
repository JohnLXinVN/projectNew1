import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import images from '~/assets/images';
import HeaderText from '~/components/HeaderText';

import styles from './ControlGlobal.module.scss';

const cx = classNames.bind(styles);

function ControlGlobal() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div>
                    <HeaderText
                        title="Control global spend"
                        des="Manage worldwide company spend with globally accepted debit and credit corporate visa cards powered by in-built spend rules, budgets, and approval flows."
                    />
                </div>
                <div className={cx('content')}>
                    <div className="row">
                        <div className="col-6">
                            <div className={cx('img-wrapper')}>
                                <img className={cx('img')} src={images.imgProductCard7} alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className={cx('list')}>
                                <div className={cx('item')}>
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <div className={cx('text-item')}>
                                        <h2>Avoid currency fees</h2>
                                        <h3>
                                            Spend with no fees in GBP and EUR, and benefit from a market-leading 1.99%
                                            exchange markup on all other currencies.
                                        </h3>
                                    </div>
                                </div>
                                <div className={cx('item')}>
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <div className={cx('text-item')}>
                                        <h2>Make payments globally</h2>
                                        <h3>
                                            Help your employees pay, no matter where, with Payhawk’s corporate visa
                                            cards accepted by over 36 million merchants.
                                        </h3>
                                    </div>
                                </div>
                                <div className={cx('item')}>
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <div className={cx('text-item')}>
                                        <h2>Send worldwide</h2>
                                        <h3>
                                            Have your company cards sent anywhere in the world with custom shipments for
                                            every employee. Same powerful control for your CFO or finance managers, new
                                            locations for your teams to spend.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ControlGlobal;
