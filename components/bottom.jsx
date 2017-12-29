import React from "react";

class Bottom extends React.Component {
    render() {
        return (
            <div>
            <footer className="nav3">
                <div id="footer_menu" className="footer_menu">
                    <ul>
                        <li>
                            <a href="index.html" className="router-link-exact-active router-link-active act">
                                <i className="icon icon-home"></i><p>首页</p>
                            </a>
                        </li>
                        <li>
                            <a href="product.html">
                                <i className="icon icon-goods"></i><p>列表</p>
                            </a>
                        </li>
                        <li>
                            <a href="cart.html">
                                <i className="icon icon-cart"></i><p>购物车</p>
                            </a>
                        </li>
                        <li>
                            <a href="suprise.html">
                                <i className="icon icon-surprise"></i><p>惊喜</p>
                            </a>
                        </li>
                        <li>
                            <a href="me.html">
                                <i className="icon icon-user"></i><p>我的</p>
                            </a>
                        </li>
                    </ul>
                    <div className="foot-cart-num">0</div>
                </div>
            </footer>
            <section className="comFooterBox"></section>
        </div>);
    };
}

module.exports = Bottom;