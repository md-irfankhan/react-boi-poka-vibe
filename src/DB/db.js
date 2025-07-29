const getReadData=()=>{
    const data = localStorage.getItem('read')
    if(data){
        return JSON.parse(data);
    }
    else{
        return []
    }

}
const getWishData=()=>{
    const data = localStorage.getItem('wish')
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

const saveWish=(data)=>{
      localStorage.setItem('wish',JSON.stringify(data));
}

const addReadData=(data)=>{
      const a = getReadData()
      if(!a.includes(parseInt(data))){
            a.push(parseInt(data))
      }
      
      saveRead(a);
}
const addWishData=(data)=>{
      const a = getWishData()
      if(!a.includes(parseInt(data))){
            a.push(parseInt(data))
      }
      
      saveWish(a);
}

export {getReadData,addReadData,getWishData,addWishData}