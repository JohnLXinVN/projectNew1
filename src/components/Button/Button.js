import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    children,
    to,
    href,
    primary = false,
    text = false,
    blackWhileBtn = false,
    blackClass,
    sizeS,
    textUnderLine,
    arrowDemo,
    leftIcon,
    rightIcon,
    className,
    iconPrimary,
    iconEbook,
    bgBlack,
    bgWhile,
    btnWhileBlack,
    fullWidth,
    noBorder,
}) {
    let Comp = 'button';

    const props = {
        to,
        href,
    };

    const classes = cx('wrapper', {
        [className]: className,
        blackWhileBtn,
        primary,
        text,
        textUnderLine,
        arrowDemo,
        sizeS,
        bgBlack,
        bgWhile,
        btnWhileBlack,
        fullWidth,
        noBorder,
    });

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <FontAwesomeIcon className={cx('icon')} icon={faArrowLeft} />}
            <span className={cx('title')}>{children}</span>
            {rightIcon && (
                <FontAwesomeIcon className={cx('icon', { iconPrimary, iconEbook, blackClass })} icon={faArrowRight} />
            )}
        </Comp>
    );
}

export default Button;
