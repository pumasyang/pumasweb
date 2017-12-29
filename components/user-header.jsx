import React from "react";

class userHeader extends React.Component {
    render() {
        return (
            <div className="avatars">
            <div className="avatar avatar-item-nb">
                <div className="wsh_cell_hd">
                    <div className="avatar-icon">
                        <img src="../src/styles/image/member/warn-2.png" alt=""/>
                    </div>
                </div>
                <div className="avatar-primary">
                    <div className="text_overflow avatar-title">pumas <span className="date">03-30 17:49</span></div>
                    <div className="text_overflow avatar-detail">pumas3@163.com</div>
                </div>
            </div>
        </div>);
    };
}

module.exports = userHeader;