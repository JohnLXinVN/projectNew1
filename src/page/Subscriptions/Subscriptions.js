import classNames from 'classnames/bind';

import images from '~/assets/images';
import video from '~/assets/video';
import Button from '~/components/Button';
import FAQs from '~/components/FAQs';
import HeaderText from '~/components/HeaderText';
import HeaderTopProduct from '~/components/HeaderTopProduct';
import ChooseCardItem from '~/layouts/components/ChooseCardItem';
import IntroduceImgLeft from '~/layouts/components/IntroduceImgLeft';
import IntroduceImgRight from '~/layouts/components/IntroduceImgRight';
import Video from '~/layouts/components/Video';
import LevelUp from '../Home/LevelUp';

import styles from './Subscriptions.module.scss';
import TestimonialSlider from './TestimonialSlider';

const cx = classNames.bind(styles);

function Subscriptions() {
    return (
        <div className={cx('wrapper')}>
            <HeaderTopProduct
                headerText="Understand your spend with subscriptions"
                des="Monitor all your company’s recurring payments in one place to stay informed and make better decisions."
                img={images.imgSubscriptions1}
            />
            <div className="container">
                <HeaderText
                    title="Stop wasting money on unused and duplicate business subscriptions"
                    des="From SaaS tools to office rent, recurring costs often make up a large part of overall company spend. Our subscription management software will monitor all of your subscriptions for you, no matter how you choose to pay for them."
                />
                <IntroduceImgLeft
                    title="Uncover hidden costs"
                    content="We group your business subscriptions by provider for a complete overview of regular payments per vendor. Find quick and easy ways to save where you spend with our proactive search for recurring payments."
                    images={images.imgSubscriptions2}
                    imgWidthFull
                />
                <IntroduceImgRight
                    title="Eliminate cost creep"
                    content="Assess fluctuations in subscription amount over the past 12 months with real-time month-for-month comparisons by percentage difference on individual or business subscription fees."
                    images={images.imgSubscriptions3}
                    imgWidthFull
                />
                <IntroduceImgLeft
                    title="Avoid overspending"
                    content="Stop wasting money on unused and duplicate business subscriptions. With our subscription management software, it is easy to store passwords and check what’s being used and when, so you know who’s responsible for each subscription payment."
                    images={images.imgSubscriptions4}
                    imgWidthFull
                />
            </div>
            <Video src={video.subscriptionsVideo} />
            <div className={cx('btn')}>
                <Button btnWhileBlack>Book a demo</Button>
            </div>
            <div className="container">
                <HeaderText title="How does Payhawk's subscription tracking work?" />
                <div className="mb-96">
                    <div className="row">
                        <div className="col-4">
                            <ChooseCardItem
                                img={images.imgSubscriptions5}
                                content="Purchase a subscription"
                                des="Simply pay with your physical or virtual Payhawk card — or a bank transfer through our portal."
                            />
                        </div>
                        <div className="col-4">
                            <ChooseCardItem
                                img={images.imgSubscriptions5}
                                content="Let automation do the job"
                                des="We automatically recognise recurring expenses as subscriptions, including all past expenses. No manual work required."
                            />
                        </div>
                        <div className="col-4">
                            <ChooseCardItem
                                img={images.imgSubscriptions5}
                                content="Monitor with ease"
                                des="See all recurring payments within the company in one place to stay informed and make better decisions."
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black-green text-while">
                <div className="container">
                    <HeaderText title="Smart subscription-spend tracking" />
                    <IntroduceImgRight
                        images={images.imgSubscriptions6}
                        title1="Never go short"
                        title2="Cover your expenses"
                        title3="Auto top-up"
                        content1="We predict the amount to be billed for each subscription and let you know how much of the card's available funds will go towards covering the expense."
                        content2="With our subscription management software, you can pay for any subscription expenses above budget in just a couple of clicks by requesting additional funds in the Payhawk app."
                        content3="Using our recurring monthly limits, you can automatically top-up relevant cards each month, ensuring your subscriptions will always get paid."
                        imgWidthFull
                    />
                </div>
            </div>

            <TestimonialSlider />

            <FAQs
                header="FAQ"
                headerContent1=" What is subscription management software?"
                content1="Subscription management software is software that tracks recurring payments. At Payhawk, our customers can use the in-built subscription management feature to mark recurring payments. Our software automatically highlights payments that could be potential subscriptions. This means your finance team has better visibility of cash flow to forecast spending and influence budgets. And ​​that your accounts will always be topped up to cover upcoming recurring costs."
                headerContent2=" Is subscription management software good for growing businesses?"
                content2="Subscription management is very important for growing businesses. From office rent to HR tools, recurring payments are huge for companies of all sizes. All organisations, especially growing businesses, need to keep a close eye on spending and cash flow. Companies can avoid cost creep and duplicate payments by using subscription management software and ensure they never miss an important payment. Spend visibility is vital for growing businesses, and clarity over recurring spending can inform budget decision-making and forecasting."
            />
            <LevelUp />
        </div>
    );
}

export default Subscriptions;
