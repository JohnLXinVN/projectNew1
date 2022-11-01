import classNames from 'classnames/bind';

import styles from './HeaderTopProduct.module.scss';
import Button from '../Button';
import config from '~/config';

const cx = classNames.bind(styles);

function HeaderTopProduct({
    headerText,
    des,
    img,
    btnLeft = 'Schedule a demo',
    btnRight = 'Open an account',
    toBtnLeft = config.routes.demo,
    toBtnRight = config.routes.pricing,
}) {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className={cx('content')}>
                            <div className={cx('header')}>{headerText}</div>
                            <div className={cx('des')}>{des}</div>
                            <div className={cx('btn')}>
                                <Button primary rightIcon arrowDemo iconPrimary to={toBtnLeft}>
                                    {btnLeft}
                                </Button>
                                <Button blackWhileBtn to={toBtnRight}>
                                    {btnRight}
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={cx('block-img')}>
                            <img className={cx('img')} src={img} alt="anh" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderTopProduct;
