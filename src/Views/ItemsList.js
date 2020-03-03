import React from 'react';
import CardComponent from '../Components/Card';
import Grid from '@material-ui/core/Grid';

export default class ItemsList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productsArr : []
        }
    }
    componentDidMount(){
        console.log("didmount222")
        let th = this;
        fetch('http://localhost:4000/getProducts', {
			method  : 'get',
			headers : {
				'Content-Type' : 'application/json'
			},
		}).then((resp) => resp.json())
			.then(function(respObj) {
                th.setState({productsArr : respObj.products})
            });
    }

    render(){
        {console.log(this.state.productsArr)}
        const cardStyle = {
            color: "#000",
            backgroundColor: "#fff",
            border: "2px solid #eee",
          };
        return (
            /** First Customized Component **/
            <div style = {{'marginTop' : 50}}>
                 <Grid container spacing={3}>
                     {this.state.productsArr.length && this.state.productsArr.length > 0 && this.state.productsArr.map((val,index)=>{
                         return(
                         <Grid item md={3} sm = {4} xs= {6}>
                         <CardComponent 
                         cardTitle={val.Name}
                         cardStyle={cardStyle}
                         Image = {val.Image}
                         imageHeight = '130'
                         imageWidth = '100%'
                         itemsList = {true}
                         cardHeader = {false}
                         price = {val.Price}
                     /> 
                 </Grid>
                         )
                     }
                     )
                     }
            </Grid>
            </div>
            
        );
  }
}