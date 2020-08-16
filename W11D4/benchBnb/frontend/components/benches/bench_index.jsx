import React from 'react';
import { fetchBenches } from '../../util/bench_api_util';
import BenchIndexItem from './bench_index_item'

class BenchIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBenches();
    }

    render() {
        return (
            <div>
                <ul className="bench-list">
                    {this.props.benches.map((bench, i) => (
                        <BenchIndexItem key={`bench-${i}`} bench={bench} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default BenchIndex;