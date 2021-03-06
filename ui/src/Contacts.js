import { Divider, Grid, Link, List, ListItem, ListItemIcon } from "@material-ui/core"
import { Email, Phone } from "@material-ui/icons"
import React, { Component, useState } from "react";

function Contacts() {
    return (
        <div className='contacts'>
            <ul>
                <li>
                    <img src="/images/github-logo.png" />
                    <a href="https://github.com/belenot">Belenot</a>
                </li>
                <li>
                    <img src="/images/vk-logo.png" />
                    <a href="https://vk.com/id147448693">Холхунов Сергей</a>
                </li>
                <li>
                    <img src="/images/phone-icon.png" />
                    <a>8-(966)-041-18-27</a>
                </li>
                <li>
                    <img src="/images/email-icon.png" />
                    <a>kholhunov0@gmail.com</a>
                </li>
                <li>
                    <img src="/images/upwork-icon.webp" />
                    <a href="https://www.upwork.com/freelancers/~013fde27aa64a065af">Upwork profile</a>
                </li>
            </ul>
        </div>
    )
}

export default Contacts