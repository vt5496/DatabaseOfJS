function func(a){
    if (a<=5){
        console.log(a);
        func(++a)
    }
}

func(0)
