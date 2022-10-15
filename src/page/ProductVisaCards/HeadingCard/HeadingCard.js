import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button';
import config from '~/config';
import styles from './HeadingCard.module.scss';

const cx = classNames.bind(styles);

function HeadingCard() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className={cx('content')}>
                            <div className={cx('header')}>The most efficient corporate Visa Cards for businesses</div>
                            <div className={cx('des')}>
                                Visa Credit and Visa Debit cards backed by powerful software to control your company’s
                                spending.
                            </div>
                            <div className={cx('btn')}>
                                <Button primary rightIcon arrowDemo iconPrimary to={config.routes.demo}>
                                    Schedule a demo
                                </Button>
                                <Button backWhileBtn>Open an account</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={cx('block-img')}>
                            <img src={images.imgProductCard1} alt="anh" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeadingCard;
