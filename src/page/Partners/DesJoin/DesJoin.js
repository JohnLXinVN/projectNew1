import classNames from 'classnames/bind';

import styles from './DesJoin.module.scss';

const cx = classNames.bind(styles);

function DesJoin() {
    return (
        <div className="container">
            <div className="row">
                <div className="shift-1">
                    <div className={cx('des-join')}>
                        <p>
                            At Payhawk, we're experts at building great spend management solutions. We help customers
                            stay in control of company spending and improve efficiencies all over the world. However, we
                            don't provide implementation services to our customers directly. As such, ERP integrators
                            and financial management providers with competencies in Oracle NetSuite, Microsoft Dynamics,
                            SAP, and other platforms can help provide critical implementation support to our enterprise
                            customers' and support the successful connection of expense management, accounting, and
                            more.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DesJoin;
