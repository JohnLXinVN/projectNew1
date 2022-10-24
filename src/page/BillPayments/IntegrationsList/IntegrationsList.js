import classNames from 'classnames/bind';

import styles from './IntegrationsList.module.scss';
import TitleTag from '~/components/TitleTag';
import images from '~/assets/images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function IntegrationsList({ noPaddingWrap }) {
    const imagesList = [
        images.iconBillPayment1,
        images.iconBillPayment2,
        images.iconBillPayment3,
        images.iconBillPayment4,
        images.iconBillPayment5,
        images.iconBillPayment6,
        images.iconBillPayment7,
        images.iconBillPayment8,
        images.iconBillPayment9,
    ];

    return (
        <>
            <div className={cx('content-img-right', 'content-list')}>
                <div className={cx('container-children', noPaddingWrap && 'no-padding')}>
                    <div className="row">
                        <div className="col-6">
                            <div className={cx('wrap')}>
                                <TitleTag data="INTEGRATIONS" />
                                <h1 className={cx('title')}>Flawless integration with your business tools</h1>
                                <div className={cx('content')}>
                                    No more manual uploads: Payhawk easily syncs your expenses and receipts with the ERP
                                    system and accounting software of your choice, while making sure 100% of the pushed
                                    data is correct.
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                {imagesList.map((img, key) => (
                                    <div className="col-4" key={key}>
                                        <Link className={cx('block')}>
                                            <img className={cx('icon')} src={img} alt="icon" />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IntegrationsList;
