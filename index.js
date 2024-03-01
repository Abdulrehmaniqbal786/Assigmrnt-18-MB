const fs = require('fs');


// ---Create  file Sync method----

// fs.writeFileSync('Assigment18.txt','Hello world')
// console.log("file create sucessfully")


// --Create file Async method----

// fs.writeFile('Assigment.txt',"Hello world" , (error)=>{
//     if(error){
//         console.log("error occured" , error)

//     }
//     console.log("file create sucessfully")
// })


// ---Read file Sync method----

// const data = fs.readFileSync('Assigment18.txt')
// console.log("Data of file is:",data.toString())

// ---Read file Async method----

// fs.readFile('Assigment18.txt',function(err,data){
//     if(err){
//         console.log("error occured" , err)
//         return;
//     }
//     console.log("Data of file is:",data.toString())
// })
// console.log("After read file")



// -- Create folder Sync Method --

// try {
//     if(!fs.existsSync('Folder1')){
//         fs.mkdirSync('Folder1')
//         console.log('created')

//     }
// } catch (error) {
//     console.log("error occured" , error)
// }
// console.log("Folder create sucessfully")


// -- Create folder Async Method --

// fs.mkdir('Folder2',function(err){
//     if(err){
//         console.log('error occured' , err);
//         return;
//     }
//     console.log('created')
// })







// ---Delete  file Sync method----

// try {
//     fs.unlinkSync('Assigment18.txt')
// } catch (error) {
//     console.log("error occured" , error)
// }


// ---Delete  file Async method----

// fs.unlink('Assigment18.txt',function(error){
//     if(error){
//         console.log("error occured" , error)
//     }
//     console.log("file delete sucessfully")
// })



// --Rename/upload file name Sync mrthod-----

// console.log("Before name")
// if(fs.existsSync('Assigment18.txt')){
//     fs.renameSync('Assigment18.txt' , 'text.txt')
//     console.log("File name upload sucessfully")
// }else{
//     console.log("File not found")
// }

// console.log("After name")


// --Rename/upload file name Async mrthod-----

// fs.rename('Assigment18.txt' , 'text.txt',function(err){
//         if(err){
//             console.error("Something went wrong",err)
//             return;
            
//         }
//         console.log('File name upload sucessfully')
// })

