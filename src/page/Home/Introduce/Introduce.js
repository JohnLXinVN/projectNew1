import classNames from 'classnames/bind';
import images from '~/assets/images';
import IntroduceImgLeft from '~/layouts/components/IntroduceImgLeft';
import IntroduceImgRight from '~/layouts/components/IntroduceImgRight';
import styles from './Introduce.module.scss';

const cx = classNames.bind(styles);

function Introduce() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className={cx('header')}>
                    <div className="row">
                        <div className={cx('header-content')}>Global spend management in just one solution.</div>
                    </div>
                </div>
                <div className={cx('content')}>
                    <IntroduceImgLeft
                        images={images.img1}
                        imgDes={images.img1more}
                        title="Unlock greater governance and control"
                        imagesDesLink={images.img1more}
                        content="Implement greater governance and control without cumbersome overheads. With
                                            Payhawk, our expense management software lets you issue debit or credit
                                            cards for both teams and individuals, and set spend rules that are enforced
                                            whenever the card is used. A clear win-win, giving employees more freedom
                                            and financial leaders more control."
                    />

                    <IntroduceImgRight
                        images={images.img2}
                        imgDes={images.img2more}
                        title="Get your time back"
                        imagesDesLink={images.img2more}
                        content="With Payhawk, you can replace 80% of manual finance processes with
                        automation. It’s easy. Our product saves time with automated receipt
                        matching, invoice categorisation against the correct cost centre and VAT
                        rates, and is enhanced by our OCR technology. With us, financial leaders can
                        use their time to scale business operations, instead of chasing receipts."
                    />

                    <IntroduceImgLeft
                        images={images.img3}
                        imgDes={images.img3more}
                        title="Cut costs, not corners"
                        imagesDesLink={images.img3more}
                        content="We get it; you want easy access to real-time spend reports, so that you keep costs under control. Consider it done. Payhawk automatically identifies subscriptions making it easy for you to understand changes in costs and uncover duplicates or unused subscriptions. Also, Payhawk pays for itself with up to 1.5% cashback on card spend.

                        "
                    />

                    <IntroduceImgRight
                        images={images.img4}
                        imgDes={images.img4more}
                        title="Accelerate international growth"
                        imagesDesLink={images.img4more}
                        content="We understand what you need to scale globally. With Payhawk you can easily manage multiple global entities through a single tool. Additionally, you will enjoy a high global acceptance rate with our VISA debit and credit cards, which allows you to benefit from low FX rates. Employees can be reimbursed seamlessly — no matter where they are – as Payhawk supports multiple currencies"
                    />
                </div>
            </div>
        </div>
    );
}

export default Introduce;
