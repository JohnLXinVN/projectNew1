import classNames from 'classnames/bind';
import images from '~/assets/images';
import HeaderText from '~/components/HeaderText';
import ChooseCardItem from '~/layouts/components/ChooseCardItem';

import styles from './StreamlinedTeamSpend.module.scss';

const cx = classNames.bind(styles);

function StreamlinedTeamSpend() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <HeaderText
                    title="Streamlined team spend"
                    des="Efficient business spend and expense management with multiple debit and credit cards for teams
                    and projects"
                />

                <div className={cx('content')}>
                    <div className="row">
                        <div className="col-4">
                            <ChooseCardItem
                                img={images.icon1}
                                content="Share budgets easily"
                                des="Create, track, and update, team cards with shared budgets for team, department, event, or project-related spending."
                            />
                        </div>
                        <div className="col-4">
                            <ChooseCardItem
                                img={images.icon1}
                                content="Control team or project spend"
                                des="Give financial managers real-time control over, their team spend, budgets, and subscriptions."
                            />
                        </div>
                        <div className="col-4">
                            <ChooseCardItem
                                img={images.icon1}
                                content="Empower team members"
                                des="Support team members to spend as required with corporate visa cards linked to their team budget."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StreamlinedTeamSpend;
