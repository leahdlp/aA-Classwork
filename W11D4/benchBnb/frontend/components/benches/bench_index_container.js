import { connect } from 'react-redux';
import BenchIndex from './bench_index';
import { fetchAllBenches } from '../../actions/bench_actions'

const mapStateToProps = (state, ownProps) => ({
    benches: Object.values(state.entities.benches)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchBenches: () => dispatch(fetchAllBenches())
})

export default connect(mapStateToProps, mapDispatchToProps)(BenchIndex);