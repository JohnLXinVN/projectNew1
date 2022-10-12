import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import config from '~/config';
import Button from '~/components/Button';
import MenuHeaderItem from '~/components/MenuHeaderItem';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <MenuHeaderItem />
                <Link to={config.routes.home}>
                    <div className={cx('logo')}>
                        <img className={cx('circle')} src={images.logo} alt="payhawklogo" />
                    </div>
                </Link>
                <div className={cx('action')}>
                    <Button text to={config.routes.login}>
                        Login
                    </Button>
                    <Button primary rightIcon arrowDemo iconPrimary to={config.routes.demo}>
                        Schedule a demo
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
