export function numberFormateThousand(value){
    if (!value) return value
    let val=parseFloat(value)
    if(!val) return value
    let arr=value.split(".")
    let re =/(-?\d+)(\d{3})/
    while(re.test(arr[0])){
        arr[0] =arr[0].replace(re,"$1,$2")
    }
    value=arr.join(".")
    return value
}