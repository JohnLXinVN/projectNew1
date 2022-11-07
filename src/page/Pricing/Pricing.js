import classNames from 'classnames/bind';
import { useEffect } from 'react';

import FAQs from '~/components/FAQs';
import LevelUp from '../Home/LevelUp';
import MainContent from './MainContent';

import styles from './Pricing.module.scss';

const cx = classNames.bind(styles);

function Pricing() {
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
            <MainContent />
            <FAQs
                header="Frequently asked questions"
                lists={[
                    {
                        id: 1,
                        title: 'Where can I spend with Payhawk?',
                        des: 'Visa Commercial is the highest-level business card and is accepted by more than 36 million merchants worldwide, including car rentals and accommodations. You can also make free bank transfers to any bank account in Europe that supports SEPA or Faster Payments.',
                    },
                    {
                        id: 2,
                        title: 'How do I transfer funds to Payhawk?',
                        des: 'You have your own dedicated account number and sort code in GBP, and international IBANs for GBP and EUR. You can deposit funds to your account like with any traditional bank account using SEPA, Faster Payments or SWIFT. Likewise, you can also receive funds from third parties.',
                    },
                    {
                        id: 3,
                        title: 'Is Payhawk a bank?',
                        des: 'Payhawk is not a bank. Payhawk can be described as a one stop shop serving fast-scaling enterprises with card issuing, bank transfers and IBAN accounts. Payhawk is acting as an agent of institutions that have licence to issue E-money in the UK and the European Economic Area (EEA) and are licensed by MasterCard and Visa. Payhawk does not receive, hold, transfer, or come into possession of your funds at any time.',
                    },
                    {
                        id: 4,
                        title: 'How does the 1.5% cashback work?',
                        des: 'Every customer on a yearly plan will earn up to 1.5% cashback on every payment made with your Payhawk cards (excluding ATM withdrawals). The cashback is directly applied to your Payhawk invoice and is capped at your monthly subscription amount. Full details at www.payhawk.com/cashback-terms/',
                    },
                    {
                        id: 5,
                        title: 'Is the 1.5% cashback just for my initial term?',
                        des: 'You will earn up to 1.5% cashback as long as you continue to renew your Payhawk yearly subscription.',
                    },
                    {
                        id: 6,
                        title: 'How do I sign-up for a yearly plan that has 1.5% cashback included?',
                        des: 'You can drop us a line on the chat or simply email us at sales@payhawk.com, and our team will send you a yearly contract paid monthly that includes up to 1.5% cashback.',
                    },
                ]}
            />
            <LevelUp />
        </div>
    );
}

export default Pricing;
