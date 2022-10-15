import { faFileImport } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import config from '~/config';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <div className={cx('header')}>Product</div>
                                <div className={cx('wrap-flex')}>
                                    <Link className={cx('item')} to={config.routes.productvisacards}>
                                        Visa Company Cards
                                    </Link>
                                    <Link className={cx('item')} to={config.routes.productexpensemanagement}>
                                        Expense management
                                    </Link>
                                    <Link className={cx('item')} to={config.routes.invoiceManagement}>
                                        Invoice Management
                                    </Link>
                                    <Link className={cx('item')} to={config.routes.businesstravelexpenses}>
                                        Travel expenses
                                    </Link>
                                    <Link className={cx('item')} to={config.routes.billpayments}>
                                        Bill Payments
                                    </Link>
                                    <Link className={cx('item')} to={config.routes.integrations}>
                                        Integrations
                                    </Link>
                                    <Link className={cx('item')} to={config.routes.pricing}>
                                        Pricing
                                    </Link>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className={cx('header')}>Resources</div>
                                <div className={cx('wrap-flex')}>
                                    <Link className={cx('item')} to={config.routes.blog}>
                                        Blog
                                    </Link>
                                    <Link className={cx('item')} to={config.routes.podcast}>
                                        Podcast
                                    </Link>
                                    <Link className={cx('item')} to={config.routes.webinars}>
                                        Webinars
                                    </Link>
                                    <Link className={cx('item')} to={config.routes.security}>
                                        Security
                                    </Link>
                                    <Link className={cx('item')} to={config.routes.customers}>
                                        Customers
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className={cx('header')}>Download our application</div>
                                <div className={cx('wrap-flex')}>
                                    <Link className={cx('item')}>Download for iPhone</Link>
                                    <Link className={cx('item')}>Download for Android</Link>
                                </div>
                                <div className={cx('social')}>
                                    <a className={cx('icon-social')} href="">
                                        <img src={images.iconLinkedIn} alt="icon" />
                                    </a>
                                    <a className={cx('icon-social')} href="">
                                        <img src={images.iconYoutube} alt="icon" />
                                    </a>
                                    <a className={cx('icon-social')} href="">
                                        <img src={images.iconTwitter} alt="icon" />
                                    </a>
                                    <a className={cx('icon-social')} href="">
                                        <img src={images.iconFace} alt="icon" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className={cx('header')}>Use Cases</div>
                                <div className={cx('wrap-flex')}>
                                    <Link className={cx('item')} to={config.routes.usecase}>
                                        The Frequent Traveler
                                    </Link>
                                    <Link className={cx('item')} to={config.routes.usecase}>
                                        The Remote Employee
                                    </Link>
                                    <Link className={cx('item')} to={config.routes.usecase}>
                                        The Project Based Spender
                                    </Link>
                                    <Link className={cx('item')} to={config.routes.usecase}>
                                        The Advertiser
                                    </Link>
                                    <Link className={cx('item')} to={config.routes.usecase}>
                                        The Office Supplier
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className={cx('header')}>Offices</div>
                        <div className={cx('infor')}>
                            <div>
                                <div className={cx('heading')}>London</div>
                                <a
                                    className={cx('item')}
                                    href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x48761d534c71e61f:0xed954db9a12ee251?source=g.page.default"
                                >
                                    <div>
                                        WeWork, 1 Waterhouse Square, London, <br />
                                        EC1N 2ST
                                    </div>
                                </a>
                                <a className={cx('item')} href="tel:+44 20 3318 2561">
                                    +44 20 3318 2561
                                </a>
                            </div>
                            <div />
                            <div className={cx('infor')}>
                                <div>
                                    <div className={cx('heading')}>London</div>
                                    <a
                                        className={cx('item')}
                                        href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x48761d534c71e61f:0xed954db9a12ee251?source=g.page.default"
                                    >
                                        <div>
                                            WeWork, 1 Waterhouse Square, London, <br />
                                            EC1N 2ST
                                        </div>
                                    </a>
                                    <a className={cx('item')} href="tel:+44 20 3318 2561">
                                        +44 20 3318 2561
                                    </a>
                                </div>
                            </div>
                            <div className={cx('infor')}>
                                <div>
                                    <div className={cx('heading')}>Paris</div>
                                    <a
                                        className={cx('item')}
                                        href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x48761d534c71e61f:0xed954db9a12ee251?source=g.page.default"
                                    >
                                        <div>33 rue La Fayette 75009 Paris, France</div>
                                    </a>
                                    <a className={cx('item')} href="tel:+44 20 3318 2561">
                                        +33 6 78 92 53 67
                                    </a>
                                </div>
                            </div>
                            <div className={cx('infor')}>
                                <div>
                                    <div className={cx('heading')}>Amsterdam</div>
                                    <a
                                        className={cx('item')}
                                        href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x48761d534c71e61f:0xed954db9a12ee251?source=g.page.default"
                                    >
                                        <div>
                                            Weesperstraat 61-105 Amsterdam, <br />
                                            Netherlands, 1018 VN
                                        </div>
                                    </a>
                                    <a className={cx('item')} href="tel:+31 85 107 1394">
                                        +31 85 107 1394
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className={cx('latest-blog')}>
                            <div className={cx('header')}>The latest from the blog</div>
                            <div className={cx('wrap-flex')}>
                                <Link className={cx('item')} to={config.routes.usecase}>
                                    <div className={cx('block-item')}>
                                        <FontAwesomeIcon icon={faFileImport} />
                                        <p>Support spend optimisation with VAT recovery on business receipts</p>
                                    </div>
                                </Link>
                                <Link className={cx('item')} to={config.routes.usecase}>
                                    <div className={cx('block-item')}>
                                        <FontAwesomeIcon icon={faFileImport} />
                                        <p>
                                            Payhawk launches business credit cards to offer UK enterprises a smart
                                            alternative
                                        </p>
                                    </div>
                                </Link>
                                <Link className={cx('item')} to={config.routes.usecase}>
                                    <div className={cx('block-item')}>
                                        <FontAwesomeIcon icon={faFileImport} />
                                        <p>Can finance automation help scale your business?</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className={cx('header')}>Contacts</div>
                                <div>
                                    <div className={cx('heading')}>Support</div>
                                    <a className={cx('item')} href="mailto:undefined">
                                        support@payhawk.com
                                    </a>
                                </div>
                                <div>
                                    <div className={cx('heading')}>Support</div>
                                    <div className={cx('wrap-flex')}>
                                        <a className={cx('item')} href="mailto:undefined">
                                            sale@payhawk.com
                                        </a>
                                        <a className={cx('item')} href="tel:+44 20 3868 8704">
                                            +44 20 3868 8704
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className={cx('header')}>About</div>
                                <div className={cx('wrap-flex')}>
                                    <a className={cx('item')} href="">
                                        Why Payhawk
                                    </a>
                                    <a className={cx('item')} href="">
                                        Team
                                    </a>
                                    <a className={cx('item')} href="">
                                        We are hiring!
                                    </a>
                                    <a className={cx('item')} href="">
                                        Contact us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={cx('slim-footer-inner')}>
                    <a href="" className={cx('item')}>
                        Terms of use
                    </a>
                    <a href="" className={cx('item')}>
                        Privacy Policy
                    </a>
                    <a href="" className={cx('item')}>
                        Visa
                    </a>
                    <a href="" className={cx('item')}>
                        Mastercard
                    </a>
                </div>
            </div>
            <div className="container">
                <div className={cx('footer-end')}>
                    <p className={cx('item-footer-end')}>
                        Payhawk Limited 2022, All rights reserved. Payhawk Limited is registered under company
                        registration number 11747263, WeWork, 1 Waterhouse Square, London, EC1N 2ST. Payhawk Visa Cards
                        are issued by Payrnet Limited holding an eMoney Institution (EMI) licence No 900594 in the UK
                        and UAB Payrnet holding an eMoney Institution (EMI) licence No LB001994 in Lithuania.
                    </p>
                    <p className={cx('item-footer-end')}>
                        *Up to 1.5% cashback on all card payments, capped at your subscription.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
