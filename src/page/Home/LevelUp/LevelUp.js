import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button';

import styles from './LevelUp.module.scss';

const cx = classNames.bind(styles);

function LevelUp() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className={cx('wrap')}>
                    <div className="row">
                        <div className="col-6">
                            <h1 className={cx('header')}>Level up with Payhawk</h1>
                            <h3 className={cx('des')}>
                                Take financial control and manage your business debit and credit cards and spend easily,
                                all from the same account. That's the power of all-in-one finance.
                            </h3>

                            <div className={cx('block-btn')}>
                                <Button primary blackClass bgBlack rightIcon arrowDemo>
                                    Schedule a demo
                                </Button>
                                <Button backWhileBtn>Open an account</Button>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className={cx('block-img')}>
                                <img className={cx('img')} src={images.hardCard} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LevelUp;
