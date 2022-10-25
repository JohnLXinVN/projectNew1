import classNames from 'classnames/bind';
import HeaderText from '~/components/HeaderText';
import LevelUp from '../Home/LevelUp';

import styles from './Integrations.module.scss';
import ListSelector from './ListSelector';

const cx = classNames.bind(styles);

function Integrations() {
    return (
        <div className={cx('wrapper')}>
            <HeaderText title="Flawless integrations save time and money" des="We value both." />
            <ListSelector />
            <LevelUp />
        </div>
    );
}

export default Integrations;
