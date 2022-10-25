import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';

import styles from './ListSelector.module.scss';

const cx = classNames.bind(styles);

function ListSelector() {
    const listItem = [
        {
            id: 1,
            icon: images.imgIntegration1,
            title: 'Exact',
            des: 'Automated expense reconciliation with Exact',
        },
        {
            id: 2,
            icon: images.imgIntegration2,
            title: 'NetSuite',
            des: 'Automated reconciliation with NetSuite',
        },
        {
            id: 3,
            icon: images.imgIntegration3,
            title: '60dias',
            des: 'VAT recovery on-platform with 60dias',
        },
        {
            id: 4,
            icon: images.imgIntegration4,
            title: 'Datev',
            des: 'Push data directly to DATEV with a click',
        },
        {
            id: 5,
            icon: images.imgIntegration5,
            title: 'Xero',
            des: 'Automated expense reconciliation with Xero',
        },
        {
            id: 6,
            icon: images.imgIntegration6,
            title: 'QuickBooks',
            des: 'Automated reconciliation with QuickBooks',
        },
        {
            id: 7,
            icon: images.imgIntegration7,
            title: 'Microsoft Dynamics',
            des: 'Automated reconciliation with Microsoft Dynamics',
        },
        {
            id: 8,
            icon: images.imgIntegration8,
            title: 'Excel',
            des: 'Reconcile expenses to any accounting systems',
        },
        {
            id: 9,
            icon: images.imgIntegration9,
            title: 'Partner APIs',
            des: 'Powerful developer APIs for advanced integrations',
        },
        {
            id: 10,
            icon: images.imgIntegration10,
            title: 'TravelPerk',
            des: 'Invoice fetching directly from TravelPerk',
        },
        {
            id: 11,
            icon: images.imgIntegration11,
            title: 'Google SSO & SAML',
            des: 'Fast and secure authentication for all employees',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className="row">
                    {listItem.map((item, index) => (
                        <div className="col-3" key={index}>
                            <Link className={cx('item-link')}>
                                <div className={cx('icon-brand')}>
                                    <img src={item.icon} alt="" />
                                </div>
                                <h5 className={cx('title')}>{item.title}</h5>
                                <p className={cx('des')}>{item.des}</p>
                                <div className={cx('item-footer')}>
                                    <FontAwesomeIcon className={cx('icon-arrow')} icon={faArrowRight} />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListSelector;
