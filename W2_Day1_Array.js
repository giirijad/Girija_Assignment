function funoccurrences(input)
{
const nums = [2,4,5,2,1,2];
let j=0
for (k=0;k<=nums.length;k++)
{
    
if (nums[k] == input)
{
    j++;
}
}
return j;
}

console.log('No of times input appeared is  ' , funoccurrences(2));
console.log('No of times input appeared is  ' , funoccurrences(5));
