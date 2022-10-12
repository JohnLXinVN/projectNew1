import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import HomeSlider from './HomeSlider/HomeSlider';
import LogoBrand from './LogoBrand/LogoBrand';
import Solutions from './Solutions';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('home-slider')}>
                <HomeSlider />
            </div>
            <LogoBrand />
            <Solutions />
            <history />
        </div>
    );
}

export default Home;
