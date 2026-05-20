function count(data, callback) {
  console.log(data);

  callback();

  console.log(data);
  

}

count(1, ()=>{
    count(2, ()=>{
        count(3 , ()=>{
            count(4 , ()=>{
                console.log("Stopped Manually");
                
            })
        })
    })
});
