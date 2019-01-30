import React from 'react';

export default class Navi extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    render() {


        return (
            <div>
                <li>Hallo1</li>
                <li>Hallo2</li>
                <li>Hallo3</li>
            </div>
        );
    }
}
