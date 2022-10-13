import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import Button from '~/components/Button';
import config from '~/config';

import styles from './Integration.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Integration() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className={cx('title')}>
                            <h1 className={cx('header')}>Seamless integrations</h1>
                            <div className={cx('content-list')}>
                                <div className={cx('list-item')}>
                                    <span className={cx('icon-tick')}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    <p>No manual data uploads necessary</p>
                                </div>
                                <div className={cx('list-item')}>
                                    <span className={cx('icon-tick')}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    <p>Faster month-end process with automatic reconciliation</p>
                                </div>
                                <div className={cx('list-item')}>
                                    <span className={cx('icon-tick')}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    <p>Get set up in less than 20 minutes</p>
                                </div>
                                <div className={cx('list-item')}>
                                    <span className={cx('icon-tick')}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    <p>Custom integrations tailored to enterprise</p>
                                </div>
                            </div>
                            <Button primary rightIcon iconPrimary arrowDemo to={config.routes.integrations}>
                                Learn more
                            </Button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={cx('img-wrapper')}>
                            <img src={images.integrationImg} alt="ảnh" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Integration;
