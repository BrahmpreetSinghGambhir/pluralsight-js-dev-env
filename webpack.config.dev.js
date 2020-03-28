// Here we're configuring webpack to bundle js and css and code is available at bit.ly/2dSZwea

import path from 'path';

export default {
  debug: true,                                          //Enables some debugging information as we run our build
  devtool: 'inline-source-map',                         //Different sourcemap options have tradeoffs in quality and speed i.e. high quality means longer to generate
  noInfo: false,                                        //setting 'noInfo' to false will make webpack display all files that its bundling
  entry: [                                              //Define entyr point of application - Good place to add middleware for hot reloading. Currently entry point is src/index
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',                                        //Here we're bundling it for web browsers i.e. our target. other options are node, electron etc
  output: {                                             // Defining where dev bundle should get created. In reality, it wont create any physical file. It will serve our build from memoryand serve it to browser
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],                                          //Optional to add power eg. hot reloading, catching error, linting styles etc
  module: {
    loaders: [                                          // Here we're telling the types of file, we want Webpack to handle/convert.
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },                 //Loaders teach webpack how to handle different file types like js,css,sass,less,images etc
      { test: /\.css$/, loaders: ['style', 'css'] }
    ]
  }
}
