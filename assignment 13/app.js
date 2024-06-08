let arr=[1,2,5,6,3,4];
let num=4;
function max(arr, num){
   for(let i=0; i<arr.length; i++){
    if(arr[i]>num){
        console.log(arr[i]);
    }
   }
}
max(arr,num);


let str="abcdabcdefgggh"
function extract(str){
    let ans="";
    for(let i=0; i<str.length; i++){
        if(ans.indexOf(str[i])==-1){
            ans+=str[i];
        }
    }
    return ans;
}
let final=extract(str);
console.log(final);

let str2="apnacollege";
function vowels(str2){
    let count=0;
    for(let i=0; i<str2.length; i++){
        if(str2[i]=='a' || str2[i]=='e' || str2[i]=='i' ||str2[i]=='o' || str2[i]=='u'){
            count++;
        }
    }
    return count;
}
console.log(vowels(str2));

let country=['Australia', 'Germany', 'United States of America'];

function largestCountry(country){
    let ansIdx=0;
    for(let i=0; i<country.length; i++){
        let ansLen=country[ansIdx].length;
        let currLen=country[i].length;
        if(currLen>ansLen){
            ansIdx=i;
        }
    }
    return country[ansIdx];

}
console.log(largestCountry(country));


let start=21;
let end=25;
function rand(start,end){
    let diff=end-start;
    return Math.floor(Math.random()*diff)+start;
}
console.log(rand(start,end));