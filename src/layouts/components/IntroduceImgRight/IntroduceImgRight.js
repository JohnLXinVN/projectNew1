import classNames from 'classnames/bind';
import Button from '~/components/Button';
import TitleTag from '~/components/TitleTag';

import styles from './IntroduceImgRight.module.scss';

const cx = classNames.bind(styles);

function IntroduceImgRight({
    images,
    imgDes,
    imagesDesLink,
    title,
    content,
    imgWidthFull,
    btnBlackWhile,
    title1,
    content1,
    title2,
    content2,
    toBtn,
    btnWhileBlack,
    tag,
    noPaddingWrap,
}) {
    return (
        <>
            <div className={cx('content-img-right', 'content-list')}>
                <div className={cx('container-children', noPaddingWrap && 'no-padding')}>
                    <div className="row">
                        <div className="col-6">
                            <div className={cx('wrap')}>
                                {tag && <TitleTag data={tag} />}
                                <h1 className={cx('title')}>{title}</h1>
                                <div className={cx('content')}>{content}</div>
                                {title1 && <h1 className={cx('title1')}>{title1}</h1>}
                                {content1 && <div className={cx('content1')}>{content1}</div>}
                                {title2 && <h1 className={cx('title2')}>{title2}</h1>}
                                {content2 && <div className={cx('content2')}>{content2}</div>}
                                <div className={cx('btn')}>
                                    {btnBlackWhile && (
                                        <div className={cx('block-btn')}>
                                            <Button primary blackClass bgBlack rightIcon arrowDemo to={toBtn}>
                                                {btnBlackWhile}
                                            </Button>
                                        </div>
                                    )}

                                    {btnWhileBlack && (
                                        <div className={cx('block-btn')}>
                                            <div className="ml-32">
                                                <Button btnWhileBlack>{btnWhileBlack}</Button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className={cx('img')}>
                                <img className={cx('img-avatar', imgWidthFull && 'fullWidth')} src={images} alt="img" />
                                {imgDes && <img className={cx('img-description')} src={imagesDesLink} alt="img" />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IntroduceImgRight;
