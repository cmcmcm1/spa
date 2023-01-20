import React, { Component } from 'react';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";

export class Login extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div class="margin10">
                    <label for="email">email</label>
                    <input type="email" id="email" name="email" class="input-100"></input>
                </div>
                <div class="margin10">
                    <label for="password">password</label>
                    <input type="password" id="password" name="password" class="input-100"></input>
                </div>
                <div className="button">Log in</div>
            </div>
        );
    }
}
