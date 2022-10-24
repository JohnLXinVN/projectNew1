import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './CorporateVisa.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function CorporateVisa() {
    return (
        <div className={cx('wrap')}>
            <div className="row">
                <div className="col-6">
                    <div className={cx('img')}>
                        <img src={images.imgBillPayment3} alt="img" />
                    </div>
                </div>

                <div className="col-6">
                    <div className={cx('content-wrap')}>
                        <div className={cx('item')}>
                            <h3>Virtual Cards</h3>
                            <h4>
                                Generate virtual cards for online payments. Trust employees to make payments under
                                strict spending rules and budgets controlled by the finance team.
                            </h4>
                        </div>
                        <div className={cx('item')}>
                            <h3>Physical Cards</h3>
                            <h4>
                                Issue best-in-class corporate visa cards to travelling employees. Control every payment
                                with built-in spend rules and automatically collect outstanding receipts in real-time.
                            </h4>
                        </div>
                        <div className={cx('item')}>
                            <h3>Team Cards</h3>
                            <h4>
                                Issue team cards for employees spending from a shared budget. Each employee receives a
                                unique card number tied to a shared team budget. The perfect solution to manage
                                subscriptions, marketing budgets, or project-based spending.
                            </h4>
                        </div>
                        <div className={cx('action')}>
                            <Button btnWhileBlack>Learn more</Button>
                            <div className={cx('embeded-wrapper')}>
                                <Link className={cx('item')}>
                                    <img src={images.imgBillPayment6} alt="img" />
                                </Link>
                                <Link className={cx('item')}>
                                    <img src={images.imgBillPayment7} alt="img" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CorporateVisa;
