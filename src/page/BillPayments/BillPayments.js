import classNames from 'classnames/bind';
import { useEffect } from 'react';
import images from '~/assets/images';
import HeaderText from '~/components/HeaderText';
import HeaderTopProduct from '~/components/HeaderTopProduct';
import LogoBrand from '~/components/LogoBrand';
import IntroduceImgLeft from '~/layouts/components/IntroduceImgLeft';
import IntroduceImgRight from '~/layouts/components/IntroduceImgRight';
import LevelUp from '../Home/LevelUp';

import styles from './BillPayments.module.scss';
import CorporateVisa from './CorporateVisa';
import IntegrationsList from './IntegrationsList';

const cx = classNames.bind(styles);

function BillPayments() {
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
            <HeaderTopProduct
                headerText="The easiest way to manage company finances"
                des="Payhawk combines business credit cards and debit cards, payments, expenses and cash into one integrated experience."
                img={images.imgBillPayment1}
            />
            <LogoBrand />
            <div className="bg-light-green">
                <div className="container">
                    <IntroduceImgRight
                        tag="EXPENSE MANAGEMENT"
                        title="Ultimate control over company spending"
                        content="Define spend policies and approval flows with our advanced workflows. Spend limits can be set by defining individual or team thresholds and adjusted at any time. The associated budget owner will receive notifications in real-time to approve transactions."
                        images={images.imgBillPayment2}
                    />
                </div>
            </div>
            <div className="bg-black-green">
                <div className="container">
                    <HeaderText
                        tag="CORPORATE VISA CARDS"
                        title="Issue virtual & physical corporate cards"
                        colorWhile
                    />
                    <CorporateVisa />
                </div>
            </div>
            <div className="container">
                <div className="mt-48">
                    <IntroduceImgLeft
                        tag="INVOICE MANAGEMENT"
                        title="Eliminate manual work with data extraction in 60+ languages"
                        content="Automatically extract and reconcile data from invoices in more than 60 languages and digitise bookkeeping. Leverage a powerful OCR with machine learning that learns from your input to automate manual data entry."
                        images={images.imgBillPayment4}
                        imgWidthFull
                        noPaddingWrap
                    />
                    <IntroduceImgRight
                        tag="BILL PAYMENTS"
                        title="Save time with fast and easy payments"
                        content="Set your payments on auto-pilot. Payhawk provides dedicated IBANs allowing free SEPA Instant and Faster Payments transfers fully integrated with your vendor management process."
                        images={images.imgBillPayment4}
                        noPaddingWrap
                        imgWidthFull
                    />
                    <IntegrationsList noPaddingWrap />
                </div>
            </div>
            <LevelUp />
        </div>
    );
}

export default BillPayments;
