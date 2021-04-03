document.getElementById('userDataScreen').style.display= "none"   
document.getElementById('LoginScreen').style.display="block" 
 

function showData(){
    

    let data = []

        firebase.firestore().collection('data').get().then(docs =>{
            docs.forEach(doc=>{
                console.log(doc.data().msg)
                data.push(doc.data().msg) 

                 
            })

            console.log(data) 
            for(let i=0;i<data.length ; i++)
            {
                document.getElementById('res').innerHTML  += 
                 `<tr>
                     <td>${data[i]}</td>
                     <td></td>
                     
                </tr>`

            }

            

        }).catch(e=>{
            console.log("ErroR")
        })
}




document.getElementById('loginBtn').addEventListener("click", loginUser ) 
// document.getElementById('logoutBtn').addEventListener("click", logout ) 

 function loginUser(){
   

    var provider = new firebase.auth.GoogleAuthProvider(); 


    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        console.log(user)  
      

        
        
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });


      console.log("testing" ) ; 

      

 }
 firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById('LoginScreen').style.display="none" 
        document.getElementById('userDataScreen').style.display= "block"  
      // ...
    } else {
        document.getElementById('LoginScreen').style.display="block" 
            document.getElementById('userDataScreen').style.display= "none"   
    }
  });

 
  function logout(){

firebase.auth().signOut().then(function() {
    // Sign-out successful.
    document.getElementById('LoginScreen').style.display="block" 
    document.getElementById('userDataScreen').style.display= "none"    
    console.log('User Logged Out!');
  }).catch(function(error) {
    // An error happened.
    console.log(error);
  });

}




  showData() 
