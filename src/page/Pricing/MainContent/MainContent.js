import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import HeaderText from '~/components/HeaderText';

import styles from './MainContent.module.scss';

const cx = classNames.bind(styles);

function MainContent() {
    const listItem1 = [
        {
            id: 1,
            des: 'Payhawk physical Visa Commercial Debit and Credit cards (individual/team)',
        },
        {
            id: 2,
            des: 'Payhawk Virtual Visa Commercial Debit and Credit cards (individual/team)',
        },
        {
            id: 3,
            des: 'One click card issuance and card freezing',
        },
        {
            id: 4,
            des: 'Up to six x better exchange rates than banks',
        },
        {
            id: 5,
            des: 'Local accounts in EUR, GBP',
        },
        {
            id: 6,
            des: 'Apple Pay',
        },
        {
            id: 7,
            des: 'Google Pay',
        },
    ];
    const listItem2 = [
        {
            id: 1,
            des: 'Bill payments and reimbursements',
        },
        {
            id: 2,
            des: 'Pre-accounting OCR in 60+ languages',
        },
        {
            id: 3,
            des: 'Free transfers with SEPA and FP',
        },
        {
            id: 4,
            des: 'Smart inbox for receipts attachment',
        },
        {
            id: 5,
            des: 'Bulk payments with ‘four eyes’ approval',
        },
        {
            id: 6,
            des: 'Out of pocket cash management for employees without cards',
        },
    ];
    const listItem3 = [
        {
            id: 1,
            des: 'Customer Success Specialist',
        },
        {
            id: 2,
            des: 'Online onboarding session',
        },
        {
            id: 3,
            des: 'Success-based onboarding flow',
        },
        {
            id: 4,
            des: 'Single sign-on with SAML',
        },
        {
            id: 5,
            des: 'Custom contracts and better rates',
        },
        {
            id: 6,
            des: 'ERP integration to SAP, Oracle NetSuite, and Microsoft Dynamics',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <HeaderText title="Up to 1.5% cashback on card payments up to the amount of your subscription" />
                <div className={cx('block-select')}>
                    <div className="row">
                        <div className="shift-1">
                            <div className={cx('pricing-cards')}>
                                <div className={cx('pricing-card-wrapper')}>
                                    <div className={cx('pricing-card')}>
                                        <div className={cx('wrap-content')}>
                                            <h3 className={cx('title')}>Premium Cards</h3>
                                            <div className={cx('sub-title')}>
                                                Corporate Visa cards with built-in spend rules and automated collection
                                                of receipts
                                            </div>
                                        </div>
                                        <Button primary btnGreenBlack rightIcon arrowDemo iconPrimary>
                                            Apply now
                                        </Button>
                                        <div className={cx('des')}>
                                            {listItem1.map((item) => (
                                                <div className={cx('item')} key={item.id}>
                                                    <div className={cx('icon')}>
                                                        <FontAwesomeIcon icon={faCheck} />
                                                    </div>
                                                    <div className={cx('content-item')}>
                                                        <p>{item.des}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('pricing-card-wrapper')}>
                                    <div className={cx('pricing-card')}>
                                        <div className={cx('wrap-content')}>
                                            <h3 className={cx('title')}>All-In-One Spend</h3>
                                            <div className={cx('sub-title')}>
                                                Integrated financial stack to control cards, invoices, payments and
                                                cash.
                                            </div>
                                        </div>
                                        <Button primary btnGreenBlack rightIcon arrowDemo iconPrimary>
                                            Apply now
                                        </Button>
                                        <div className={cx('des')}>
                                            {listItem2.map((item) => (
                                                <div className={cx('item')} key={item.id}>
                                                    <div className={cx('icon')}>
                                                        <FontAwesomeIcon icon={faCheck} />
                                                    </div>
                                                    <div className={cx('content-item')}>
                                                        <p>{item.des}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('pricing-card-wrapper')}>
                                    <div className={cx('pricing-card')}>
                                        <div className={cx('wrap-content')}>
                                            <h3 className={cx('title')}>Enterprise Suite</h3>
                                            <div className={cx('sub-title')}>
                                                Enterprise grade solution designed for companies expanding
                                                internationally Starts at 20 seats
                                            </div>
                                        </div>
                                        <Button primary btnGreenBlack rightIcon arrowDemo iconPrimary>
                                            Apply now
                                        </Button>
                                        <div className={cx('des')}>
                                            {listItem3.map((item) => (
                                                <div className={cx('item')} key={item.id}>
                                                    <div className={cx('icon')}>
                                                        <FontAwesomeIcon icon={faCheck} />
                                                    </div>
                                                    <div className={cx('content-item')}>
                                                        <p>{item.des}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <Link className={cx('link-text-underline')}>See all features</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('info-box')}>
                    <div className={cx('info-box-inner')}>
                        <h2 className={cx('title-info')}>Every edition includes</h2>
                        <div className="row">
                            <div className="col-4">
                                <div className={cx('item')}>
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <div className={cx('content-item')}>
                                        <p>Expense app for iOS and Android</p>
                                    </div>
                                </div>

                                <div className={cx('item')}>
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <div className={cx('content-item')}>
                                        <p>Automated or manual export to Xero, Excel, CSV, Datev</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className={cx('item')}>
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <div className={cx('content-item')}>
                                        <p>Live chat and lightning-fast support</p>
                                    </div>
                                </div>

                                <div className={cx('item')}>
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <div className={cx('content-item')}>
                                        <p>Support for EUR, GBP, USD card currencies</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className={cx('item')}>
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <div className={cx('content-item')}>
                                        <p>Up to 6 times better exchange rates</p>
                                    </div>
                                </div>

                                <div className={cx('item')}>
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <div className={cx('content-item')}>
                                        <p>First-class delivery of physical cards</p>
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

export default MainContent;
