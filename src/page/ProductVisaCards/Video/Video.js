import classNames from 'classnames/bind';
import video from '~/assets/video';

import styles from './Video.module.scss';

const cx = classNames.bind(styles);

function Video() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className={cx('video')}>
                    <video src={video.cardVideo} height="100%" width="100%" controls="controls" audio="muted" />
                </div>
            </div>
        </div>
    );
}

export default Video;
