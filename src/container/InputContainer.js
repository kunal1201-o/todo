import InputBox from '../components/InputBox'
import {connect} from  'react-redux'
import {addToList} from '../service/actions/action'

const mapStateToProps=state =>({

})
const mapDispatchToprops=dispatch=>({
    addToListHandler:data=>dispatch(addToList(data)),

})
export default connect(mapStateToProps,mapDispatchToprops)(InputBox)