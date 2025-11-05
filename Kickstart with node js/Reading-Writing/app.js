const http = require('http')
const fs = require('fs')   

const server = http.createServer((req, res)=>{

    //url method
    const url = req.url;
    const method = req.method;

    if(req.url === '/' ){
        //form

        res.setHeader('Content-type', 'text/html');


        res.end(
            `
            <form action= '/message' method='POST'>
                <label> Name: </label>
                <input type = "text" name="username"></input>
                <button type="submit">Add</button>
            </form>
            `
        );
    } else{
        if(req.url == '/message'){
            res.setHeader('Content-type', 'text/html')

            let dataChunks = [];
            req.on('data', (chunks) =>{
                console.log(chunks);
                dataChunks.push(chunks);
            })

            req.on('end', ()=>{
                let buffer = Buffer.concat(dataChunks)
                console.log(buffer)

                let formData = buffer.toString();
                console.log(formData);

                const formValues = formData.split("=")[1];
                console.log(formValues);

                fs.writeFile('formValue.txt', formValues,(err)=>{
                    res.statusCode(302); //redirected
                    res.setHeader('Location', '/')
                    res.end();
                })
            })
        }
    }
})

server.listen(3000, ()=>{
    console.log("server is running")
})