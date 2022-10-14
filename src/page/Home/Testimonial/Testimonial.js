import classNames from 'classnames/bind';
import images from '~/assets/images';

import styles from './Testimonial.module.scss';

const cx = classNames.bind(styles);

function Testimonial() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={cx('wrap-content')}>
                            <div className={cx('block-img')}>
                                <img className={cx('img')} src={images.testimonialImg} alt="anh" />
                            </div>
                            <div className={cx('content')}>
                                <h1 className={cx('header')}>
                                    “Payhawk enables me to free up my time to focus on tasks that create company value.”
                                </h1>
                                <h2 className={cx('footer')}>Nadia Vanuytrecht, HR & Operations Manager at Explose</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
