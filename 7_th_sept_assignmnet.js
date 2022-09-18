function totalDist(arr, n){
    let a=5;
    let b=6;
    let k=30, l=50
    let count1=0,count2=0;
    a=a*k;
    b*=l;
    for(let i = 0; i<n; i++){
        
        if(!(a<=0)){
          
            a=a-arr[i];
            count1++;
        }
        if(!(b<=0)){
           
            b-=arr[i];
            count2++;
        }


    }
    console.log(count1+""+count2);
}
let arr=[30,80,60,100,300];
let n=arr.length;
totalDist(arr,n);