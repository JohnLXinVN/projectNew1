import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import images from '~/assets/images';

import styles from './ListSelectPartners.module.scss';

const cx = classNames.bind(styles);

function ListSelectPartners() {
    const [tabContent1, setTabContent1] = useState(true);
    const [tabContent2, setTabContent2] = useState(false);
    const [tabContent3, setTabContent3] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className={cx('tabs')}>
                    <div
                        className={cx('tab-btn', tabContent1 && 'active')}
                        onClick={() => {
                            setTabContent1(true);
                            setTabContent2(false);
                            setTabContent3(false);
                        }}
                    >
                        Engineering benefits
                    </div>
                    <div
                        className={cx('tab-btn', tabContent2 && 'active')}
                        onClick={() => {
                            setTabContent1(false);
                            setTabContent2(true);
                            setTabContent3(false);
                        }}
                    >
                        Sales benefits
                    </div>
                    <div
                        className={cx('tab-btn', tabContent3 && 'active')}
                        onClick={() => {
                            setTabContent1(false);
                            setTabContent2(false);
                            setTabContent3(true);
                        }}
                    >
                        Marketing benefits
                    </div>
                </div>
                <div className={cx('tab-content', tabContent1 && 'active')}>
                    <div className="pb-96 pt-96">
                        <div className="row">
                            <div className="col-6">
                                <div className={cx('list')}>
                                    <div className={cx('item')}>
                                        <div className={cx('icon-block')}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                                        </div>
                                        <div className={cx('des')}>Technical training and enablement</div>
                                    </div>
                                    <div className={cx('item')}>
                                        <div className={cx('icon-block')}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                                        </div>
                                        <div className={cx('des')}>Partner API</div>
                                    </div>
                                    <div className={cx('item')}>
                                        <div className={cx('icon-block')}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                                        </div>
                                        <div className={cx('des')}>Demo and sandbox environments</div>
                                    </div>
                                    <div className={cx('item')}>
                                        <div className={cx('icon-block')}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                                        </div>
                                        <div className={cx('des')}>Dedicated solution engineer</div>
                                    </div>
                                    <div className={cx('item')}>
                                        <div className={cx('icon-block')}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                                        </div>
                                        <div className={cx('des')}>
                                            Access to our roadmap and the chance to influence it
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className={cx('block-img')}>
                                    <img src={images.imgPartners6} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('tab-content', tabContent2 && 'active')}>
                    <div className="pb-96 pt-96">
                        <div className="row">
                            <div className="col-6">
                                <div className={cx('list')}>
                                    <div className={cx('item')}>
                                        <div className={cx('icon-block')}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                                        </div>
                                        <div className={cx('des')}>Sales training and enablement</div>
                                    </div>
                                    <div className={cx('item')}>
                                        <div className={cx('icon-block')}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                                        </div>
                                        <div className={cx('des')}>Referral incentives</div>
                                    </div>
                                    <div className={cx('item')}>
                                        <div className={cx('icon-block')}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                                        </div>
                                        <div className={cx('des')}>Lead sharing</div>
                                    </div>
                                    <div className={cx('item')}>
                                        <div className={cx('icon-block')}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                                        </div>
                                        <div className={cx('des')}>Deal registration</div>
                                    </div>
                                    <div className={cx('item')}>
                                        <div className={cx('icon-block')}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                                        </div>
                                        <div className={cx('des')}>RFP assistance</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className={cx('block-img')}>
                                    <img src={images.imgPartners7} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('tab-content', tabContent3 && 'active')}>
                    <div className="pb-96 pt-96">
                        <div className="row">
                            <div className="col-6">
                                <div className={cx('list')}>
                                    <div className={cx('item')}>
                                        <div className={cx('icon-block')}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                                        </div>
                                        <div className={cx('des')}>Co-branded collateral</div>
                                    </div>
                                    <div className={cx('item')}>
                                        <div className={cx('icon-block')}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                                        </div>
                                        <div className={cx('des')}>Market development funds</div>
                                    </div>
                                    <div className={cx('item')}>
                                        <div className={cx('icon-block')}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                                        </div>
                                        <div className={cx('des')}>Joint regional industry events</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className={cx('block-img')}>
                                    <img src={images.imgPartners8} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListSelectPartners;
