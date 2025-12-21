console.log("This is promise");
let prom1=new Promise((resolve,reject)=>{
    let a=Math.random();{
        if(a<0.1){
            reject("No number supporting you!!!!!")
        }
        else{
            setTimeout(()=>{
                console.log("Done!!!!");
                resolve("Accomplished....")
                
            },2300)
        }
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Accomplished once again!!!!")
        }, 1000);
    }
})
let p3 = Promise.race([prom1, prom2])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})
