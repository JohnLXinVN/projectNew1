import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button';
import config from '~/config';
import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className={cx('content')}>
                            <div className={cx('header-tick')}>Ebook</div>
                            <h2 className={cx('header')}>Free your finance team to focus on growth</h2>
                            <h3 className={cx('desc')}>
                                Read the report from Harvard Business Review Analytic Services, in association with
                                Payhawk today.
                            </h3>

                            <Button sizeS backWhileBtn to={config.routes.download}>
                                Download
                            </Button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={cx('wrap')}>
                            <img className={cx('img-banner')} src={images.imgBanner} alt="banner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
