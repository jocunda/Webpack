const path=required('path');

module.exports={
    entry:'./src/index.ts',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'public')
    }
}