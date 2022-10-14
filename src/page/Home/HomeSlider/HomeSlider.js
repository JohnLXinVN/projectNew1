import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper React components
import images from '~/assets/images';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

import styles from './HomeSlider.module.scss';
import Button from '~/components/Button';
import config from '~/config';

const cx = classNames.bind(styles);

function HomeSlider() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <div className={cx('wrapper-slider')}>
                            <h2 className={cx('title')}>Spend and scale. Globally.</h2>
                            <div className={cx('description')}>
                                With Payhawk’s corporate visa cards, you can automate manual processes, maximise
                                efficiency, and accelerate business expansion. Join the finance teams, in 32 countries,
                                that trust us with a single global solution.
                            </div>
                            <Button primary rightIcon arrowDemo iconPrimary to={config.routes.demo}>
                                Schedule a demo
                            </Button>
                            <Button backWhileBtn to={config.routes.pricing}>
                                Open an account
                            </Button>
                        </div>
                    </div>
                    <div className="col-5 ">
                        <div className={cx('col-5-item')}>
                            <div className={cx('swiper')}>
                                <Swiper
                                    grabCursor={true}
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    loop={true}
                                    navigation={true}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className={cx('img-wrapper')}>
                                            <div className={cx('img-content')}>
                                                <img className={cx('img')} src={images.imgSlider1} alt="img-slider" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className={cx('img-wrapper')}>
                                            <div className={cx('img-content')}>
                                                <img className={cx('img')} src={images.imgSlider2} alt="img-slider" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className={cx('img-wrapper')}>
                                            <div className={cx('img-content')}>
                                                <img className={cx('img')} src={images.imgSlider3} alt="img-slider" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className={cx('img-wrapper')}>
                                            <div className={cx('img-content')}>
                                                <img className={cx('img')} src={images.imgSlider1} alt="img-slider" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('footer')}>PCI DSS certified and ISO 27001 compliant</div>
            </div>
        </div>
    );
}

export default HomeSlider;
