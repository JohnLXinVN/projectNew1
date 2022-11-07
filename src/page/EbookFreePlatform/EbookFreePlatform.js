import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect } from 'react';

import images from '~/assets/images';
import FormSubmit from '~/components/FormSubmit';
import ChooseCardItem from '~/layouts/components/ChooseCardItem';
import LevelUp from '../Home/LevelUp';

import styles from './EbookFreePlatform.module.scss';

const cx = classNames.bind(styles);

function EbookFreePlatform() {
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
            <FormSubmit
                heading="Building a finance function that drives business strategy and growth"
                img={images.imgEbookFree1}
            />

            <div className={cx('inset-text')}>
                <div className="container">
                    <div className={cx('inset-text-inner')}>
                        <div className="row">
                            <div className="col-6">
                                <div className={cx('wrap-text-left')}>
                                    <p>
                                        Modern businesses need finance teams to “determine how processes, investments,
                                        funding, and operational strategies can be optimised to improve the bottom
                                        line.” Research from Harvard Business Review Analytic Services, sponsored by
                                        Payhawk, reveals that while
                                        <strong>
                                            64% of business leaders believe finance departments should analyse financial
                                            data to make recommendations on business strategy, 67% said that finance
                                            teams focus on chasing down receipts and expenses
                                        </strong>
                                        . Clearly, there’s a disconnect, and if modern businesses want to win, they must
                                        free their finance teams of manual number-crunching with expert tools and
                                        automation.
                                    </p>
                                    <p>
                                        <strong>
                                            Download the full report to learn how and why finance teams must automate
                                            important but time-consuming manual tasks to focus on solving challenges and
                                            driving business growth.
                                        </strong>
                                    </p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className={cx('wrap-text-right')}>
                                    <div className={cx('item')}>
                                        <div className={cx('icon')}>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </div>
                                        <div className={cx('title')}>
                                            <p>
                                                How your business can better equip your finance team to make
                                                recommendations on the organisation’s high-level business model and
                                                strategy
                                            </p>
                                        </div>
                                    </div>
                                    <div className={cx('item')}>
                                        <div className={cx('icon')}>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </div>
                                        <div className={cx('title')}>
                                            <p>
                                                How automation and process optimisation can save your business time and
                                                money and offer clear visibility to support decision-making
                                            </p>
                                        </div>
                                    </div>
                                    <div className={cx('item')}>
                                        <div className={cx('icon')}>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </div>
                                        <div className={cx('title')}>
                                            <p>
                                                How finance can become a collaborative, strategic partner for stability
                                                and growth across teams and the business as a whole
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <ChooseCardItem
                            img={images.imgEbookFree2}
                            content="Quick and easy to digest"
                            des="Our guides and ebooks won’t waste your time. Straightforward and expertly written - they’re here to boost you and your business."
                        />
                    </div>
                    <div className="col-4">
                        <ChooseCardItem
                            img={images.imgEbookFree3}
                            content="Professional opinions"
                            des="We share opinions you can trust. Written with research and industry insights from experts in their fields."
                        />
                    </div>
                    <div className="col-4">
                        <ChooseCardItem
                            img={images.imgEbookFree4}
                            content="Practical and directly applicable"
                            des="Use what you learn in your business straight away. Then share the knowledge."
                        />
                    </div>
                </div>
            </div>
            <div className="mt-48">
                <LevelUp />
            </div>
        </div>
    );
}

export default EbookFreePlatform;
