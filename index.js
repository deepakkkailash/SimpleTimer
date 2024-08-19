


let thebtn = document.getElementById('thebtn');

state = 'paused'

var interval = null;
thebtn.addEventListener('click',(event)=>{
    event.preventDefault();
    switch(state){

        case 'paused':
            state = 'ongoing';

             interval = setInterval(timeupdater,1000)
            event.target.innerText = 'Pause'
            console.log(state)
            break;

        case 'ongoing':

            state = 'paused';
            clearInterval(interval);
            
            event.target.innerText = 'Start'
       
            break;
    }


})




time = 0;
function timeupdater(){
    switch(state){
        case 'paused':
            console.log('paused')
            break;
        case 'ongoing':

            time+=1;
            if(time<60){
                var val = Number(document.getElementById('seconds').innerText)
                console.log(val)
                document.getElementById('seconds').innerText  = String(val+1);
            }
            else if(time==60){
                time = 0
                document.getElementById('seconds').innerText = 0
                val = Number(document.getElementById('minutes').innerText)
                if(val+1==60){
                 document.getElementById('minutes').innerText  =0
                 document.getElementById('hours').innerText =  String(Number(document.getElementById('hours').innerText)+1)
                }
                else{
                    document.getElementById('minutes').innerText  = String(val+1)
                }
                console.log(val)
      
            }
            break;
    }

}