import React, { Component } from "react";
import Avatar from '@material-ui/core/Avatar';
import { db } from '../firebase';





class UserPost extends Component{

    

    constructor(props) {
        super(props);
        this.state = {
            flower: "",
            description: "",
            image: "",
            price: "",
            user: "",
            isLoading: true
        }
      }

    componentWillMount() {
        const id = this.props.match.params.postId;
        const docRef  = db.collection('posts').doc(id);


         docRef.get()
         .then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                this.setState({
                    flower: doc.data().flower,
                    description: doc.data().description,
                    image: doc.data().image,
                    price: doc.data().price,
                    user: doc.data().username,
                    isLoading: false
                })
                console.log(this.state.flower)
                
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        })
        .catch(function(error) {
            console.log("Error getting document:", error);
        });
    }


    render(){
        if(this.state.isLoading){
            return (
                <div>
                <p>Loading...</p>
                </div>
            )
        } 
        else if(!this.state.isLoading)
        return (
            <div>
                <p>{this.state.flower}</p>
                <p>{this.state.description}</p>
                <p>{this.state.image}</p>
                <p>{this.state.price}</p>
                <p>{this.state.user}</p>
            </div>
        )
    }
}



export default UserPost;
