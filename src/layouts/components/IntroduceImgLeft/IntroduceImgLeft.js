import classNames from 'classnames/bind';
import ListItemCard from '~/page/BusinessTravelExpenses/ListItemCard';

import styles from './IntroduceImgLeft.module.scss';
import Button from '~/components/Button';
import TitleTag from '~/components/TitleTag';

const cx = classNames.bind(styles);

function IntroduceImgLeft({
    images,
    imgDes,
    imagesDesLink,
    title,
    content,
    imgWidthFull,
    listItemBusinessTravelExpenses,
    title1,
    title2,
    content1,
    content2,
    btnBlackWhile,
    toBtn,
    tag,
    noPaddingWrap,
}) {
    return (
        <>
            <div className={cx('content-img-left', 'content-list')}>
                <div className={cx('container-children', noPaddingWrap && 'no-padding')}>
                    <div className="row">
                        <div className="col-6">
                            <div className={cx('img')}>
                                <img className={cx('img-avatar', imgWidthFull && 'fullWidth')} src={images} alt="img" />
                                {imgDes && <img className={cx('img-description')} src={imagesDesLink} alt="img" />}
                            </div>
                        </div>
                        <div className="col-6">
                            <div className={cx('wrap')}>
                                {tag && <TitleTag data={tag} />}
                                {title && <h1 className={cx('title')}>{title}</h1>}
                                {listItemBusinessTravelExpenses && <ListItemCard />}
                                {content && <div className={cx('content')}>{content}</div>}
                                {title1 && <h1 className={cx('title1')}>{title1}</h1>}
                                {content1 && <div className={cx('content1')}>{content1}</div>}
                                {title2 && <h1 className={cx('title2')}>{title2}</h1>}
                                {content2 && <div className={cx('content2')}>{content2}</div>}
                                {btnBlackWhile && (
                                    <div className={cx('block-btn')}>
                                        <Button primary blackClass bgBlack rightIcon arrowDemo to={toBtn}>
                                            {btnBlackWhile}
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IntroduceImgLeft;
