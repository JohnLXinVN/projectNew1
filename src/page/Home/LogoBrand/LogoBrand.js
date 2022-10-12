import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './LogoBrand.module.scss';

const cx = classNames.bind(styles);

function LogoBrand() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className={cx('logos')}>
                    <img className={cx('logo')} src={images.logoBrand1} alt="logo" />
                    <img className={cx('logo')} src={images.logoBrand2} alt="logo" />
                    <img className={cx('logo')} src={images.logoBrand3} alt="logo" />
                    <img className={cx('logo')} src={images.logoBrand4} alt="logo" />
                    <img className={cx('logo')} src={images.logoBrand5} alt="logo" />
                    <img className={cx('logo')} src={images.logoBrand6} alt="logo" />
                </div>
            </div>
        </div>
    );
}

export default LogoBrand;
