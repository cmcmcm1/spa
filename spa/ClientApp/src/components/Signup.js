import React, { Component } from 'react';

export class Signup extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="margin10">
                    <label htmlFor="name">name</label>
                    <input type="text" id="fname" name="fname"
                        className="input-100"></input>
                </div>
                <div className="margin10">
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" name="email"
                        className="input-100"></input>
                </div>
                <div className="margin10">
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" name="password"
                        className="input-100"></input>
                </div>
                <div className="button">Get started!</div>
            </div>
        );
    }
}
