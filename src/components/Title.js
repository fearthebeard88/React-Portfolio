import React, {Component} from 'react';

const TITLES = [
    'an avid reader',
    'a rocket league fanatic',
    'a musician of dubious quality',
    'a disc golfer of little renown',
    'a beer snob of the highest order'
];

class Title extends Component
{
    state = {titleIndex: 0, fadeIn: true};

    // this method fire when a component is rendered
    // by React
    componentDidMount()
    {
        setTimeout(()=>
        {
            this.setState({fadeIn: false})
        }, 2000);

        this.animateTitles();
    }

    animateTitles = ()=>
    {
        this.titleInterval = setInterval(()=>
        {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({titleIndex, fadeIn: true});
            this.timout = setTimeout(()=>
            {
                this.setState({fadeIn: false})
            }, 2000);
        }, 4000);
    };

    componentWillUnmount()
    {
        clearTimeout(this.timout);
        clearInterval(this.titleInterval);
    }

    render()
    {
        const {fadeIn, titleIndex} = this.state;
        const title = TITLES[this.state.titleIndex];

        return (
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
        )
    }
}

export default Title;