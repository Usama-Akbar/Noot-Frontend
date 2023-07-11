import { connect } from "react-redux";
import { addToCart } from "../Services/Actions/action";
import { RemoveToCart } from "../Services/Actions/action";
import Home from "../components/Home";

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  RemoveToCartHandler: (data) => dispatch(RemoveToCart(data)),
});

const mapStateToProps = (state) => ({
  cart: state.carditems,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;
