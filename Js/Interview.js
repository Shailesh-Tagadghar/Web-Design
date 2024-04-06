This programs mostly ask in Interview

// Prime Number or Not

n = parseInt(prompt('Enter the Number : '))
count = 0

i = 1 

while(i<=n){
    if(n%i==0){
        count=count+1
    }
    i = i + 1
}

if(count == 2){
    document.write(`Prime Number`)
}
else{
    document.write(`Not a Prime Number`)
}
