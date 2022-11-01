import classNames from 'classnames/bind';
import images from '~/assets/images';

import styles from './TestimonialPlain.module.scss';

const cx = classNames.bind(styles);

function TestimonialPlain() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className="row">
                    <div className="shift-2">
                        <div className={cx('img')}>
                            <img src={images.imgPartners9} alt="img" />
                        </div>
                        <div className={cx('wrap-text')}>
                            <p>
                                At Next Consult we’re always looking for new ways to add value to our clients. As a
                                member of Payhawk’s Solution Partner Program we can now deliver and integrate a
                                market-leader expense management tool enabling our clients to automate tasks and advance
                                their digital transformation.
                            </p>
                            <h4 className={cx('author')}>Orlin Dochev</h4>
                            <h6>Managing Partner at Next Consult, one of Payhawk Solution Partners.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialPlain;
