import classNames from 'classnames/bind';
import images from '~/assets/images';

import styles from './TestimonialSlider.module.scss';

const cx = classNames.bind(styles);

function TestimonialSlider() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className="col-12">
                    <div className={cx('slider')}>
                        <div className={cx('block-img')}>
                            <img className={cx('img')} src={images.imgSubscriptions7} alt="" />
                        </div>
                        <div className={cx('content')}>
                            <div className={cx('header')}>
                                Now we can easily understand how much is spent on subscriptions and analyse the need for
                                departmental budgets and their variances.
                            </div>
                            <div className={cx('footer')}>
                                <span>Lenka Bartuskova</span>, Finance Manager
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialSlider;
