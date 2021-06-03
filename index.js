const express = require('express')
const fs = require('fs')
const app = express()

const file =[];
const folder =[];
const port = process.env.PORT ||3000
const fileimage = "https://www.computerhope.com/cdn/temp-folder.jpg";
const folderimage = "https://upload.wikimedia.org/wikipedia/commons/5/59/OneDrive_Folder_Icon.svg";

// console.log(process.env)
fs.readdir("C:\\Users\\sowmya\\Desktop",(err,files)=>{
    if(err) throw err;
    Data(files);
});

const Data =(data)=>{
    data.forEach((items)=>{
        items.match(new RegExp(`^\.[^.]+$`,"ig"))
        
          ? folder.push(`<img src =${folderimage} alt = "folder" width="50" height="50"/>${items}<br/>` )
            :file.push(`<img src=${fileimage} alt = "file" width="50" height="50"/>${items}<br/>`)
           

    })

     
}
   
  app.get('/',(req,res)=>{
      res.send(`${file}${folder}`)
     
  })  
 

 
app.listen(port,()=>{`app runs with ${port}`});





























