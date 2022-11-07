import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import config from '~/config';

import styles from './Solutions.module.scss';
const cx = classNames.bind(styles);

function Solutions() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Link className={cx('item')} to={config.routes.productvisacards}>
                            <div className={cx('img-block')}>
                                <img className={cx('img')} src={images.imgSolution1} alt="ảnh" />
                            </div>
                            <div className={cx('title')}>Company cards</div>
                        </Link>
                        <div className={cx('description')}>
                            Smart debit and credit cards with built-in spend rules, so you stay in control across all of
                            your businesses
                        </div>
                    </div>
                    <div className="col-3">
                        <Link className={cx('item')} to={config.routes.billpayments}>
                            <div className={cx('img-block')}>
                                <img className={cx('img')} src={images.imgSolution2} alt="ảnh" />
                            </div>
                            <div className={cx('title')}>Reimbursable expenses</div>
                        </Link>
                        <div className={cx('description')}>
                            Easy automated expense reports and single-click reimbursements for employees who don’t use
                            cards
                        </div>
                    </div>
                    <div className="col-3">
                        <Link className={cx('item')} to={config.routes.billpayments}>
                            <div className={cx('img-block')}>
                                <img className={cx('img')} src={images.imgSolution3} alt="ảnh" />
                            </div>
                            <div className={cx('title')}>Accounts Payable </div>
                        </Link>
                        <div className={cx('description')}>
                            Manage and pay bills centrally, enhanced by powerful OCR software and customisable approval
                            flows
                        </div>
                    </div>
                    <div className="col-3">
                        <div className={cx('item-see-more')}>
                            <Link className={cx('item')} to={config.routes.product}>
                                <div className={cx('img-block')}>
                                    <img className={cx('img')} src={images.greenLitter} alt="ảnh"></img>
                                    <div className={cx('content')}>
                                        See all of solutions
                                        <FontAwesomeIcon className={cx('icon-right')} icon={faArrowRight} />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Solutions;
