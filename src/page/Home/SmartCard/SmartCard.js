import classNames from 'classnames/bind';

import styles from './SmartCard.module.scss';
import Button from '~/components/Button';
import config from '~/config';
import images from '~/assets/images';
import HeaderText from '~/components/HeaderText';

const cx = classNames.bind(styles);

function SmartCard() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className="row">
                    <div className="shift-2">
                        <HeaderText
                            title="The smart card just got smarter"
                            des="Card-first but solution-oriented. Payhawk-powered tech enables you to move from portal
                            to app without compromising your ability to do business. Our scalable product means that
                            you have a holistic solution to easily manage global spend."
                        />
                    </div>
                </div>
            </div>
            <div className={cx('body')}>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className={cx('block-card')}>
                                <h2>Powerful software for financial leaders</h2>
                                <Button primary rightIcon arrowDemo iconPrimary to={config.routes.demo}>
                                    Discover our portal
                                </Button>
                                <div className={cx('block-card-img')}>
                                    <img src={images.smartCard2} alt="ảnh" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className={cx('block-card')}>
                                <h2>An intuitive app for employees</h2>
                                <Button primary rightIcon arrowDemo iconPrimary to={config.routes.whypayhawk}>
                                    Discover your app
                                </Button>
                                <div className={cx('block-card-img')}>
                                    <img src={images.smartCard1} alt="ảnh" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('wrap')}>
                        <div className="row">
                            <div className="col-3">
                                <div className={cx('stat')}>
                                    <h1>80%</h1>
                                    <h3 className={cx('des')}>less manual data entry and processes</h3>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className={cx('stat')}>
                                    <h1>1.5%</h1>
                                    <h3 className={cx('des')}>
                                        cashback* on <br /> every payment
                                    </h3>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className={cx('stat')}>
                                    <h1>4x</h1>
                                    <h3 className={cx('des')}>
                                        faster average <br /> month-closing
                                    </h3>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className={cx('stat')}>
                                    <h1>4.5</h1>
                                    <h3 className={cx('des')}>
                                        average score <br /> on Trustpilot and G2
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SmartCard;
