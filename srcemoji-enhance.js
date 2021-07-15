  lst=document.getElementsByClassName('alert')
                for (let index = 0; index < lst.length; index++) {
                    const element = lst[index];
                    element.innerHTML+='<span class="closebtn" onclick="this.parentElement.style.display='+"'none'"+';">&times;</span>'
                }
                document.getElementById('dark').addEventListener('click',function(){
                    if(document.getElementById('dark-mode').value=='true'){
                        document.getElementsByTagName('body')[0].classList+=' bg-dark';
                        lst=document.getElementsByClassName('icons');
                        console.log(lst)
                        for (let index = 0; index < lst.length; index++) {
                    const element = lst[index];
                    element.classList+=' icons-dark'
                }
                    }
                })
                
                showtext=document.getElementById('pophover').getAttribute('data-show')
                    showhtml=document.getElementById('pophover').getAttribute('data-html')
                    x=document.createElement('div')
                    x.setAttribute('id','pophover-div')
                    x.setAttribute('class','bg-dark rnd')
                    x.setAttribute('hidden',true)
                    x.setAttribute('style','position: absolute;  z-index: 1;width:fit-content;position: relative; left: 0;min-width: 200px ;border: 1px #808080 solid ;padding: 8px ;background-color: #cfc ;z-index: 1 ;')
                    x.innerText=showtext;
                    x.innerHTML+=showhtml
                    html=document.getElementById('pophover').innerHTML
                    document.getElementById('pophover').innerHTML=x.outerHTML+'<br>'+html
                document.getElementById('pophover').addEventListener('mouseover',function(){
                    document.getElementById('pophover-div').removeAttribute('hidden')
                    setTimeout(() => {
                        document.getElementById('pophover-div').setAttribute('hidden',true) 
                        
                    }, 3000);
                })
