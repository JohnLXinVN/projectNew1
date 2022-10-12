import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './Introduce.module.scss';

const cx = classNames.bind(styles);

function Introduce() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className={cx('header')}>
                    <div className="row">
                        <div className={cx('header-content')}>Global spend management in just one solution.</div>
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('content-img-left', 'content-list')}>
                        <div className={cx('container-children')}>
                            <div className="row">
                                <div className="col-6">
                                    <div className={cx('img')}>
                                        <img className={cx('img-avatar')} src={images.img1} alt="img" />
                                        <img className={cx('img-description')} src={images.img1more} alt="img" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className={cx('wrap')}>
                                        <h1 className={cx('title')}>Unlock greater governance and control</h1>
                                        <div className={cx('content')}>
                                            Implement greater governance and control without cumbersome overheads. With
                                            Payhawk, our expense management software lets you issue debit or credit
                                            cards for both teams and individuals, and set spend rules that are enforced
                                            whenever the card is used. A clear win-win, giving employees more freedom
                                            and financial leaders more control.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('content-img-right', 'content-list')}>
                        <div className={cx('container-children')}>
                            <div className="row">
                                <div className="col-6">
                                    <div className={cx('wrap')}>
                                        <h1 className={cx('title')}>Get your time back</h1>
                                        <div className={cx('content')}>
                                            With Payhawk, you can replace 80% of manual finance processes with
                                            automation. It’s easy. Our product saves time with automated receipt
                                            matching, invoice categorisation against the correct cost centre and VAT
                                            rates, and is enhanced by our OCR technology. With us, financial leaders can
                                            use their time to scale business operations, instead of chasing receipts.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className={cx('img')}>
                                        <img className={cx('img-avatar')} src={images.img2} alt="img" />
                                        <img className={cx('img-description')} src={images.img2more} alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('content-img-left', 'content-list')}>
                        <div className={cx('container-children')}>
                            <div className="row">
                                <div className="col-6">
                                    <div className={cx('img')}>
                                        <img className={cx('img-avatar')} src={images.img3} alt="img" />
                                        <img className={cx('img-description')} src={images.img3more} alt="img" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className={cx('wrap')}>
                                        <h1 className={cx('title')}>Unlock greater governance and control</h1>
                                        <div className={cx('content')}>
                                            Implement greater governance and control without cumbersome overheads. With
                                            Payhawk, our expense management software lets you issue debit or credit
                                            cards for both teams and individuals, and set spend rules that are enforced
                                            whenever the card is used. A clear win-win, giving employees more freedom
                                            and financial leaders more control.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('content-img-right', 'content-list')}>
                        <div className={cx('container-children')}>
                            <div className="row">
                                <div className="col-6">
                                    <div className={cx('wrap')}>
                                        <h1 className={cx('title')}>Get your time back</h1>
                                        <div className={cx('content')}>
                                            With Payhawk, you can replace 80% of manual finance processes with
                                            automation. It’s easy. Our product saves time with automated receipt
                                            matching, invoice categorisation against the correct cost centre and VAT
                                            rates, and is enhanced by our OCR technology. With us, financial leaders can
                                            use their time to scale business operations, instead of chasing receipts.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className={cx('img')}>
                                        <img className={cx('img-avatar')} src={images.img4} alt="img" />
                                        <img className={cx('img-description')} src={images.img4more} alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduce;
