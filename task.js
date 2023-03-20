var timmer = document.createElement('div');

setTimeout(()=>{
    timmer.textContent ="10";
    setTimeout(() => {
        timmer.textContent = "9"
        setTimeout(() => {
            timmer.textContent = "8"
            setTimeout(() => {
                timmer.textContent = "7"
                setTimeout(() => {
                    timmer.textContent = "6"
                    setTimeout(() => {
                        timmer.textContent = "5"
                        setTimeout(() => {
                            timmer.textContent = "4"
                            setTimeout(() => {
                                timmer.textContent = "3"
                                setTimeout(() => {
                                    timmer.textContent = "2"
                                    setTimeout(() => {
                                        timmer.textContent = "1"
                                        setTimeout(() => {
                                            timmer.textContent = "Happy Independence day"
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
},1000)


document.body.append(timmer);