const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

const config = {
    entry: {
        me: [
            'react-hot-loader/patch',
            './Me.js'
        ],
        index: [
            'react-hot-loader/patch',
            './Index.js'
        ],
        product: [
            'react-hot-loader/patch',
            './Product.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
		filename: "[name].js"
    },
    module: {
        rules: [
            {
				test: /.css$/,
				loaders: ["style-loader", "css-loader"],
				exclude: "/node_modules/"
            },
            {
				test: /\.(png|jpe?g|gif|ico)(\?\S*)?$/,
                loader: 'url-loader',
                exclude: "/node_modules/"
			},
			{
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                loader: "babel-loader",
                query: /(es2015|react)/

                /* options: {
                    'presets': ['es2015', 'react']
                } */

                /* loaders: ['babel-loader?presets[]=es2015&presets[]=react'] */
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:"我的",
            template: path.join(__dirname, 'default_index.ejs'),
            filename: "me.html",
            chunks: ['me']
		}),
        new HtmlWebpackPlugin({
            title:"首页",
            template: path.join(__dirname, 'default_index.ejs'),
            filename: "index.html",
            chunks: ['index']
		}),
        new HtmlWebpackPlugin({
            title:"商品列表",
            template: path.join(__dirname, 'default_index.ejs'),
            filename: "product.html",
            chunks: ['product']
		})
    ],
    resolve:{
		extensions:['.js',".css",'.jsx']  //自动补全识别后缀
	}
};

module.exports = config;
