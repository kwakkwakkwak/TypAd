import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


import Showdown from 'showdown';

Showdown.converter = new Showdown.Converter();


class MDEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            md: '',
            rendered: ''

        };
        this.MDRenderer = this.MDRenderer.bind(this);
    }

    MDRenderer(event) {
        this.setState({md: event.target.value});
        this.setState({rendered: Showdown.converter.makeHtml(event.target.value)});
    }


    render() {
        return (
            <div>
                <div className='row col-12'>
                    <Editor
                              value={this.state.md}
                              onChange={this.MDRenderer}
                    />

                    <MDRendered
                                value={this.state.rendered}
                    />
                </div>
            </div>
        );
    }
}

function Editor(props) {

    return (
        <div className='col-6 removePadding'>
               <textarea value={props.value}
                         onChange={props.onChange}>
               </textarea>
        </div>
    )
}

function MDRendered(props) {

    return (
        <div className='col-6 removePadding redered'
            dangerouslySetInnerHTML={{__html: props.value}}>

        </div>
    )

}

ReactDOM.render(
    <MDEditor/>,
    document.getElementById('root')
);
