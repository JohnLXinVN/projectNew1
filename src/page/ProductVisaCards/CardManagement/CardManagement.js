import classNames from 'classnames/bind';
import images from '~/assets/images';
import HeaderText from '~/components/HeaderText';
import IntroduceImgLeft from '~/layouts/components/IntroduceImgLeft';
import IntroduceImgRight from '~/layouts/components/IntroduceImgRight';

import styles from './CardManagement.module.scss';

const cx = classNames.bind(styles);

function CardManagement() {
    return (
        <div className={cx('wrapper')}>
            <HeaderText
                title="Straightforward company card management"
                des="Easy-to-use workflows, fund requests, spend limits, budgets, and team cards all in one place."
            />
            <div className={cx('content')}>
                <div className="container">
                    <div>
                        <IntroduceImgLeft
                            images={images.imgProductCard2}
                            title="Stay on top of business spend"
                            content="Help managers keep on top of business spend as it happens, with real-time automatic sync functionality. Team leads can stay abreast of any and every payment, as well as manage spend limits and view outstanding expenses, all in the same tool."
                            imgWidthFull
                        />
                        <IntroduceImgRight
                            images={images.imgProductCard3}
                            title="Set impactful spend controls"
                            content="Customise your employee spend with built-in limits, policies and rules and easily apply them to individual or team cards. Change or update spend controls in real-time, freeze cards or issue new ones in seconds."
                            imgWidthFull
                        />
                        <IntroduceImgLeft
                            images={images.imgProductCard4}
                            title="Simplify bulk card management"
                            content="Remove the burden of individual card control with clever account automation that allows you to manage both debit and credit corporate visa cards in bulk. Set rules and apply them to whole departments with a click."
                            imgWidthFull
                        />
                        <IntroduceImgRight
                            images={images.imgProductCard5}
                            title="Reflect your company structures"
                            content="Control monthly recurring spend limits and ATM withdrawal live and in real-time. Set approval flows and manage fund requests on the fly – from the platform or from your mobile device."
                            imgWidthFull
                        />

                        <IntroduceImgLeft
                            images={images.imgProductCard6}
                            title="Support flexible spending"
                            content="Encourage business agility with flexible company spending via instant fund requests; allowing your team to deal with out-of-policy, unforeseen, or emergency payments as they need."
                            imgWidthFull
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardManagement;
