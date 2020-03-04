import React from 'react';
import CardComponent from '../Components/Card';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { getProducts, addingItemsToCart } from '../Redux/actions';


class ItemsList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productsList : '',
            addingItemsToCartArr: []
        }
    }
    componentDidMount(){
        this.props.getProducts();
    }
    addItemstoCart(items) {
        this.state.addingItemsToCartArr.push(items)
        items.userName= 'manojavelugoti@gmail.com';
        console.log(items)
        this.props.addingItemsToCart(items);
    }

    render(){
        const cardStyle = {
            color: "#000",
            backgroundColor: "#fff",
            border: "2px solid #eee",
          };
        return (
            /** First Customized Component **/
            <div style = {{'marginTop' : 50}}>
                {console.log(this.state)}
                {console.log(this.props)}
                 <Grid container spacing={3}>
                     {this.props.productsList.length && this.props.productsList.length > 0 && this.props.productsList.map((val,index)=>{
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
                         addItemstoCart = {this.addItemstoCart.bind(this, val)}
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
const mapStateToProps = state => {
    console.log(state)
    return { productsList: state.products.getItems }
  };

export default connect(mapStateToProps, { getProducts, addingItemsToCart })(ItemsList);
