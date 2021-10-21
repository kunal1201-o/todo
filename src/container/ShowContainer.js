import ShowList from '../components/ShowList'
import {connect} from  'react-redux'
import {addToList} from '../service/actions/action'

const mapStateToProps=state =>({
    data:state.ListItems
})
const mapDispatchToprops=dispatch=>({
    addToListHandler:data=>dispatch(addToList(data)),

})
export default connect(mapStateToProps,mapDispatchToprops)(ShowList)