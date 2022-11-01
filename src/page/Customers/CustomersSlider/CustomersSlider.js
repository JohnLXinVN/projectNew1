import images from '~/assets/images';

import styles from './CustomersSlider.module.scss';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function CustomersSlider() {
    const listSlider = [
        {
            id: 1,
            img: images.imgCustomers1,
            name: 'Nadia Vanuytrecht, HR & Operations Manager',
            des: '“Payhawk enables me to free up my time to focus on tasks that create company value.”',
        },
        {
            id: 2,
            img: images.imgCustomers2,
            name: 'Gijs Spaans, European Director',
            des: '“If you are looking to scale your expensing with your team, you are also getting to the point that you’d be stupid if you didn’t take the elegant and simple solution.“',
        },
        {
            id: 3,
            img: images.imgCustomers3,
            name: 'Paul Schwarzenholz, Co-founder at Zenloop',
            des: '“Security, budget allocation, responsibility, accessibility. With Payhawk we can see every transaction in real time.”',
        },
        {
            id: 4,
            img: images.imgCustomers4,
            name: 'Polina Kasaboneva, CFO',
            des: '“We switched from Revolut to Payhawk not only because with Payhawk it’s easier to meet compliance requirements, but also because we get all the support we need.”',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className={cx('swiper')}>
                    <Swiper
                        grabCursor={true}
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 4000,
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
                        {listSlider.map((item) => (
                            <SwiperSlide>
                                <div className={cx('slider')}>
                                    <div className={cx('block-img')}>
                                        <img src={item.img} alt="img" />
                                    </div>
                                    <div className={cx('content')}>
                                        <div className={cx('title-wrapper')}>
                                            <div className={cx('name')}>{item.name}</div>
                                        </div>
                                        <div className={cx('des')}>
                                            <p>{item.des}</p>
                                        </div>
                                        <Button primary rightIcon arrowDemo iconPrimary>
                                            Read their story
                                        </Button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default CustomersSlider;
