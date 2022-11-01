import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from './FAQs.module.scss';

const cx = classNames.bind(styles);

function FAQs({ header, lists }) {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className={cx('header')}>{header}</div>
                <div className="row">
                    <div className="shift-1">
                        <div className={cx('item')}>
                            {lists.map((list) => (
                                <div className={cx('block-handle')} key={list.id}>
                                    <Accordion
                                        className={cx('wrap')}
                                        expanded={expanded === `panel${list.id}`}
                                        onChange={handleChange(`panel${list.id}`)}
                                    >
                                        <AccordionSummary
                                            aria-controls={`panel${list.id}bh-content`}
                                            id={`panel${list.id}bh-header`}
                                        >
                                            <Typography className={cx('title')}>
                                                <h2>{list.title}</h2>
                                                <div className={cx('icon')}>
                                                    <FontAwesomeIcon icon={faChevronDown} />
                                                </div>
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className={cx('des')}>{list.des}</Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQs;
