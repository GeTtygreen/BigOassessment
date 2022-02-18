function addToZero(arr){ 
    if(arr.length <= 1)
    {
        return false;
    }
    for(let i = 0; i<arr.length-1; i++){
        for(let j = 1; j<arr.length; j++){
            if(arr[i] + arr[j] === 0)
            {
                return true
            }
        }

    }
    return false;
} 
console.log(addToZero([1,2,3]))
//runtime = O(n^2)
// space = O(n)



const hasUniqueChars = (string) => {
    let arr = []
    let strArr = [...string.toLowerCase()]
    console.log(strArr)
     for (let i = 0; i < strArr.length; i++){
         if(arr.includes(strArr[i])){
             return false
             
        } else {
            arr.push(strArr[i])
         }
     }
     return true
    }
console.log(hasUniqueChars('Moundae'))
    //runtime = O(n)
    //space = O(n)


function isPangram(string){ //O(n)
    let chars = {}
    let str = string.toLowerCase()
    str = str.replace(/[^a-z+]+/g, "");
    for(let i=0; i<str.length; i++)
    {
        if(!chars[str[i]])
        {
            chars[str[i]] = 1
        }
        else{
            chars[str[i]]++
        }
    }
    if(Object.keys(chars).length>=26){
        return true;
    }
    else{
        return false;
    }
}
console.log('I like cats, but not mice')
//runtime = O(n)
//space = O(n)


function findLongestWord(arr){ //O(n)
    let size = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > size) {
            size = arr[i].length;
        }
    }
    return size;
}
//runtime = O(n)
console.log(findLongestWord(["super", "future"]));
//space= O(n)