module.exports = {
    entry:'./src/js/menu.js',
    output:{
        path:'./menu-bar/',
        publicPath:'./menu-bar/',
        filename:'menu.js'
    },
    module:{ 
     loaders:[
       {test:/.js$/,loader:'babel',query:{presets: ['es2015'] },exclude:/node_modules/},
       {test:/.less$/,loader:'style!css!less'},
       {test:/.(jpg|png|gif)$/,loader:'url?limit=8129'}
     ]
    }
}