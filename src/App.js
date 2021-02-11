import React, { Component } from 'react';
import { connect } from 'react-redux'
import QuoteForm from './components/QuoteForm'
import QuoteCard from './components/QuoteCard'

class App extends Component {

    renderQuotes(){
        return this.props.quotes.map((quote, indx) => <QuoteCard key={indx} quote={quote}/>)
    }

  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
        <QuoteForm/>
        {this.renderQuotes()}
      </div>
    );
  }
}

export default connect(state => ({ quotes: state.quotes }))(App);
