document.getElementById('shareBtn').addEventListener('click', addData) 

function  addData(){
    let mymsg = document.getElementById('msg').value 

    let datatoadd = {
        msg: mymsg
    }
    firebase.firestore().collection('data').add(datatoadd).then(res=>{
         alert('Data Added')
    }).catch(e=>{
        console.log("ERROR")
    }) 

    console.log(mymsg)  
}