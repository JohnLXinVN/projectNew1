import classNames from 'classnames/bind';
import images from '~/assets/images';
import HeaderText from '~/components/HeaderText';

import styles from './SolutionPartner.module.scss';

const cx = classNames.bind(styles);

function SolutionPartner() {
    return (
        <div className={cx('wrapper')}>
            <HeaderText title="Why become a Solution Partner?" />
            <div className={cx('content')}>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className={cx('block')}>
                                <div className={cx('img')}>
                                    <img src={images.imgPartners2} alt="" />
                                </div>
                                <h3 className={cx('title')}>Improve your customers’ experience</h3>
                                <div className={cx('des')}>
                                    We understand your requirements as a professional services business and our partner
                                    program can help you serve your customers more efficiently. The program gives you
                                    all the tools you need to integrate Payhawk with HCM systems, accounting software,
                                    ERPs, and line-of-business applications.
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className={cx('block')}>
                                <div className={cx('img')}>
                                    <img src={images.imgPartners3} alt="" />
                                </div>
                                <h3 className={cx('title')}>Transform your customers everyday tasks</h3>
                                <div className={cx('des')}>
                                    We'll give you all the tools, insights and info you need to transform our customers'
                                    corporate expense management workflows, clearly promote yourself to them, and solve
                                    more user problems.
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className={cx('block')}>
                                <div className={cx('img')}>
                                    <img src={images.imgPartners4} alt="" />
                                </div>
                                <h3 className={cx('title')}>Become a member and we’ll take care of you</h3>
                                <div className={cx('des')}>
                                    This isn't your average Partner program. You don't need to compete against hundreds
                                    of other partners to earn points and move up tiers. And our partner management team
                                    will work with you to provide you with the exact tools and incentives you need to be
                                    successful.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SolutionPartner;
