import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button';
import HeaderText from '~/components/HeaderText';
import config from '~/config';
import ChooseCardItem from '~/layouts/components/ChooseCardItem';

import styles from './ChooseCard.module.scss';

const cx = classNames.bind(styles);

function ChooseCard() {
    return (
        <div className={cx('wrapper')}>
            <HeaderText
                title="Choose between credit and debit cards"
                des="Manage your cash flow like a pro with the choice of either company credit or debit cards."
            />
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <ChooseCardItem
                            img={images.imgChoose1}
                            content="Get credit limits of up to £250K based on assessment"
                        />
                    </div>
                    <div className="col-4">
                        <ChooseCardItem
                            img={images.imgChoose2}
                            content="Access multi-currency credit lines in GBP and EUR"
                        />
                    </div>
                    <div className="col-4">
                        <ChooseCardItem
                            img={images.imgChoose3}
                            content="Make the most of interest-free card purchases (additional fees apply for late credit
                                repayments)"
                        />
                    </div>
                    <div className="col-4">
                        <ChooseCardItem
                            img={images.imgChoose4}
                            content="Forget about personal credit checks, and no personal guarantees required"
                        />
                    </div>
                    <div className="col-4">
                        <ChooseCardItem img={images.imgChoose5} content="Use with Apple and Google Pay" />
                    </div>
                    <div className="col-4">
                        <ChooseCardItem
                            img={images.imgChoose6}
                            content="Save on FX compared to traditional banks (1.99%)"
                        />
                    </div>
                </div>

                <div className={cx('btn')}>
                    <Button className="btn" primary rightIcon arrowDemo iconPrimary to={config.routes.demo}>
                        Schedule a demo
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ChooseCard;
