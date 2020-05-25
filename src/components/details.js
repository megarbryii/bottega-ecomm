import React, { Component } from 'react';

class Details extends Component {

    renderChildren = () => {
        const { links, infos } = this.props;
        let children = [];
        if(links) {
            children = links.map(link => {
                return (
                    <a key={link.id} onClick={link.onClick}  className='details__link'>
                        {link.title}
                    </a>
                )
            })
        } else if(infos) {
            children = infos.map(info => {
                return (
                    <div key={info.id} className='details__info'>
                        {info.title}
                    </div>
                )
            })
        }

        return children;
    }

    render() {
        const { title, className } = this.props;
        return (
            <div className={`${className} details`}>
                <div className='details__title'>
                    {title}
                </div>

                <div className='details__links'>
                    {
                        this.renderChildren()
                    }
                </div>
            </div>
        )
    }
}

export default Details;