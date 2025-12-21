async function getdata(){
    return new Promise((resolve,reject)=>{
        let x=fetch('https://jsonplaceholder.typicode.com/todos/1')
        let d=x.json();
        return d;
        },3500)
}

async function main() {
    console.log("begin");
    console.log("Loading Modules");
    console.log("Load Data");
    let data=await getdata()
    console.log(data);
    console.log("Finished");
    
    
    
}
main()