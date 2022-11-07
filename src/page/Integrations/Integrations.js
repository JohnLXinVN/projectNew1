import classNames from 'classnames/bind';
import { useEffect } from 'react';

import HeaderText from '~/components/HeaderText';
import LevelUp from '../Home/LevelUp';
import styles from './Integrations.module.scss';
import ListSelector from './ListSelector';

const cx = classNames.bind(styles);

function Integrations() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
    };

    useEffect(() => {
        scrollToTop();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <HeaderText title="Flawless integrations save time and money" des="We value both." />
            <ListSelector />
            <LevelUp />
        </div>
    );
}

export default Integrations;
