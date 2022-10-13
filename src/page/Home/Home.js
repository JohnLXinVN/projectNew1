import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import HomeSlider from './HomeSlider/HomeSlider';
import Introduce from './Introduce';
import LogoBrand from './LogoBrand/LogoBrand';
import Solutions from './Solutions';
import Banner from './Banner';
import SmartCard from './SmartCard';
import Integration from './Integration';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('home-slider')}>
                <HomeSlider />
            </div>
            <LogoBrand />
            <Solutions />
            <Introduce />
            <Banner />
            <SmartCard />
            <Integration />
        </div>
    );
}

export default Home;
