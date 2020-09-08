import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

const marks = [
    {
        value: 5,
        label: '₹5',
    },
    {
        value: 10,
        label: '₹10',
    },
    {
        value: 15,
        label: '₹15',
    },
    {
        value: 20,
        label: '₹20',
    },
    {
        value: 25,
        label: '₹25',
    },
    {
        value: 50,
        label: '₹50',
    },
    {
        value: 75,
        label: '₹75',
    },
    {
        value: 100,
        label: '₹100',
    },

];

function valuetext(value) {
    return `${value}Rs.`;
}

function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 5;
}

export default function AmountSlider() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography id="discrete-slider-restrict" gutterBottom>
                Restricted values
      </Typography>
            <Slider
                defaultValue={5}
                valueLabelFormat={valueLabelFormat}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-restrict"
                step={null}
                valueLabelDisplay="auto"
                marks={marks}
            />
        </div>
    );
}
