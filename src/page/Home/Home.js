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
import OftenAsk from './OftenAsk';
import LevelUp from './LevelUp';

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
            <OftenAsk />
            <LevelUp />
        </div>
    );
}

export default Home;
