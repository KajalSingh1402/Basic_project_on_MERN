let array=[1,2,3,4,5,6,2,3];
let num=2;
for(let i=0; i<arr.length; i++){
    if(arr[i]==num){
        continue;
    }
    else{
        console.log(arr[i]);
    }
}

let number=287152;
let copy=number;
let count=0;
while(copy>0){
    copy=Math.floor(copy/10);
    count++;
}
console.log(count);


let sum=0;
while(copy>0){
    let rem=copy%10;
    sum+=rem;
    copy=Math.floor(copy/10);
    count++;
}
console.log(sum);



let n=prompt("enter a number");
let fact=1;
for(let i=1; i<=n; i++){
    fact*=i;
}
console.log(fact)

let arr=[24,67,45,21,12,11];
let max=arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(max);