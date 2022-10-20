import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import HomeSlider from './HomeSlider/HomeSlider';
import Introduce from './Introduce';
import LogoBrand from './LogoBrand/LogoBrand';
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
                headerContent1="What is in the package?"
                content1="Payment accounts in EUR and GBP with your own dedicated IBANs. You also get a cloud-based web portal, mobile app for employees, and Visa Commercial debit and credit cards."
                headerContent2="Who can sign up?"
                content2="Payhawk is available for any business incorporated in the European Economic Area (EEA) or UK, including NGOs, educational & governmental institutions."
            />
            <LevelUp />
        </div>
    );
}

export default Home;
