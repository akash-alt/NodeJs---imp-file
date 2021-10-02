// const http = require('http')
// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-Type':'application\json'});
//     resp.write(JSON.stringify({name:'akash',email:'akash@gmail.com'},{name:'sam',email:'sam@gmail.com'}))
//     resp.end()
// }).listen(2000)


const fs = require('fs')

const input =process.argv
if(input[2]== 'add'){
    fs.writeFileSync(input[3],input[4])
}else if(input[2] == 'remove'){
    fs.unlinkSync(input[3])
}else{
    console.log('invalid input')
}
