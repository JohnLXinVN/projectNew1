import Header from '../components/Header';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Footer from '../components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('containerChildren')}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
