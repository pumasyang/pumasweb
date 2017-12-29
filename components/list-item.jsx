import React from "react";

class ListItem extends React.Component {
    render() {
        return (
            <div className="card-list">
            <a className="wsh_cell card-list-item" href="#">
                <div className="wsh_cell_hd">
                    <div className="card-list-icon icon-shop"></div>
                </div>
                <div className="wsh_cell_primary">
                    <div className="text_overflow card-list-title">查看更多门店</div>
                </div>
                <div className="wsh_cell_ft">
                    <span className="item-right">查看更多</span>
                </div>
            </a>
            <a className="wsh_cell card-list-item-nb" href="#">
                <div className="wsh_cell_hd">
                    <div className="card-list-icon icon-card"></div>
                </div>
                <div className="wsh_cell_primary">
                    <div className="text_overflow card-list-title">会员卡详情</div>
                </div>
                <div className="wsh_cell_ft">

                </div>
            </a>
            <a className="wsh_cell card-list-item-nb" href="#">
                <div className="wsh_cell_hd">
                    <div className="card-list-icon icon-dingyi"></div>
                </div>
                <div className="wsh_cell_primary">
                    <div className="text_overflow card-list-title">定位</div>
                </div>
                <div className="wsh_cell_ft">
                    <span className="item-right">更换定位</span>
                </div>
            </a>
            <a className="wsh_cell card-list-item-nb" href="#">
                <div className="wsh_cell_hd">
                    <div className="card-list-icon icon-gzh"></div>
                </div>
                <div className="wsh_cell_primary">
                    <div className="text_overflow card-list-title">我的</div>
                </div>
                <div className="wsh_cell_ft">

                </div>
            </a>
            <a className="wsh_cell card-list-item" href="#">
                <div className="wsh_cell_hd">
                    <div className="card-list-icon icon-dingyi2"></div>
                </div>
                <div className="wsh_cell_primary">
                    <div className="text_overflow card-list-title">会员签到</div>
                </div>
                <div className="wsh_cell_ft">
                    <span className="item-right">这是会员签到</span>
                </div>
            </a>
            <a className="wsh_cell card-list-item" href="#">
                <div className="wsh_cell_hd">
                    <div className="card-list-icon icon-dingyi3"></div>
                </div>
                <div className="wsh_cell_primary">
                    <div className="text_overflow card-list-title">会员卡详情</div>
                </div>
                <div className="wsh_cell_ft">
                </div>
            </a>
            <a className="wsh_cell card-list-item" href="#">
                <div className="wsh_cell_hd">
                    <div className="card-list-icon icon-dingyi1"></div>
                </div>
                <div className="wsh_cell_primary">
                    <div className="text_overflow card-list-title">推荐开卡</div>
                </div>
                <div className="wsh_cell_ft">
                    <span className="item-right">这是推荐开卡</span>
                </div>
            </a>
            <a className="wsh_cell card-list-item" href="#">
                <div className="wsh_cell_hd">
                    <div className="card-list-icon icon-kabao"></div>
                </div>
                <div className="wsh_cell_primary">
                    <div className="text_overflow card-list-title">微信钱包</div>
                </div>
                <div className="wsh_cell_ft">
                </div>
            </a>
        </div>);
    };
}

module.exports = ListItem;
