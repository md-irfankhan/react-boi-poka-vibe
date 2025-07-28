const getReadData=()=>{
    const data = localStorage.getItem('read')
    if(data){
        return JSON.parse(data);
    }
    else{
        return []
    }

}

const saveRead=(data)=>{
      localStorage.setItem('read',JSON.stringify(data));
}

const addReadData=(data)=>{
      const a = getReadData()
      if(!a.includes(parseInt(data))){
            a.push(parseInt(data))
      }
      
      saveRead(a);
}

export {getReadData,addReadData}