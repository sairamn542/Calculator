let display = document.getElementById('inputBox')
        let buttons = document.querySelectorAll('button');
        let str = '';
        let btnArr = Array.from(buttons)
        btnArr.forEach(btn => {
            btn.addEventListener('click',(e)=>{
                if(e.target.innerHTML == 'DEL') {
                    str = str.substring(0, str.length-1)
                    display.value = str;
                }else if(e.target.innerHTML == 'AC') {
                    str = '';
                    display.value = str;
                } else if (e.target.innerHTML == '=') {
                    str = eval(str);
                    display.value = str;
                } else {
                    str += e.target.innerHTML;
                    display.value = str;
                }
                
            })
        })