import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import HomeSlider from './HomeSlider/HomeSlider';
import Introduce from './Introduce';
import LogoBrand from '~/components/LogoBrand';
import Solutions from './Solutions';
import Banner from './Banner';
import SmartCard from './SmartCard';
import Integration from './Integration';
import Testimonial from './Testimonial';
import LevelUp from './LevelUp';
import FAQs from '~/components/FAQs';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <HomeSlider />
            <LogoBrand />
            <Solutions />
            <Introduce />
            <Banner />
            <SmartCard />
            <Integration />
            <Testimonial />
            <FAQs
                header="What CFOs often ask about"
                lists={[
                    {
                        id: 1,
                        title: 'What is in the package?',
                        des: 'Payment accounts in EUR and GBP with your own dedicated IBANs. You also get a cloud-based web portal, mobile app for employees, and Visa Commercial debit and credit cards.',
                    },
                    {
                        id: 2,
                        title: 'Who can sign up?',
                        des: 'Payhawk is available for any business incorporated in the European Economic Area (EEA) or UK, including NGOs, educational & governmental institutions.',
                    },
                    {
                        id: 3,
                        title: 'What type of card is issued?',
                        des: 'Your Payhawk card is a Visa Commercial Debit card, and can be a Credit Card if your company is based in the UK. Unlike prepaid cards, Visa Commercial is accepted worldwide via one of the most accessible global card networks including car rentals, accommodations, and digital advertising platforms.',
                    },
                    {
                        id: 4,
                        title: 'What are the fees?',
                        des: 'There are no hidden fees. You get up to 4 times better exchange rates than your bank, and you only pay for your cards.',
                    },
                    {
                        id: 5,
                        title: 'Is it safe?',
                        des: 'Your money is protected by a process known as safeguarding, which is a regulatory requirement for all EMIs. Under this process, all e-money balances must be segregated from all other cash balances. These segregated balances are held with a safeguarding bank and are routinely reconciled to ensure that the sum of all issued e-money balances is the same as the sum of cash held by the bank in the segregated account.',
                    },
                ]}
            />
            <LevelUp />
        </div>
    );
}

export default Home;
