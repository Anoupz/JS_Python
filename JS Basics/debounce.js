function calculateHeight(value){
    console.log('I am going to calculate', value);
}

function debounce(fn, wait){
    let timeout;
    return (args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(args);
        }, wait);
    }
}

const debouncedFn = debounce(calculateHeight, 300);
debouncedFn(1);
debouncedFn(2);
debouncedFn(3);
debouncedFn(4);
