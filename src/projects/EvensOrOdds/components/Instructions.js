import React from 'react';
import {connect} from 'react-redux';
import {expandInstructions, collapseInstructions} from '../actions/settings';

const Instructions = (props)=>
{
    const {instructionsExpanded, expandInstructions, collapseInstructions} = props;
     if (instructionsExpanded)
     {
         return (
             <div>
                 <h3>Instructions</h3>
                 <p>Welcome to Evens or Odds. The game goes like this...</p>
                 <p>The deck is shuffled, then you choose: will the next card be even or odd?</p>
                 <p>Make a choice every draw and see how many you can guess in a row!</p>
                 <p>(Face cards don't count.)</p>
                 <br />
                 <button onClick={collapseInstructions}>Show Less</button>
             </div>
         )
     }
     else
     {
         return (
             <div>
                 <h3>Instructions</h3>
                 <p>Welcome to Evens or Odds. The game goes like this...</p>
                 <button onClick={expandInstructions}>Read More</button>
             </div>
         )
     }
}

// This is the verbose way
// const mapStateToProps = (state)=>
// {
//     return {instructionsExpanded: state.instructionsExpanded}
// }

// const mapDispatchToProps = (dispatch)=>
// {
//     return {
//         expandInstructions: ()=> dispatch(expandInstructions()),
//         collapseInstructions: ()=> dispatch(collapseInstructions())
//     }
// }

// const componentConnector = connect(mapStateToProps, mapDispatchToProps);
// export default componentConnector(Instructions);

// The connect function returns another function, so this is
// equivalent to above.
// Syntax: state => ({}) is equivalent to (state)=>{return #stuff}
// Redux/React provides shorthand way of attaching dispatch
// methods to our props in the second arg of the connect
// function. So behind the scenes react is attaching
// dispatch to each of the actions in the object provided
// in the second argument.
export default connect(
    state => ({instructionsExpanded: state.settings.instructionsExpanded}),
    {expandInstructions, collapseInstructions}
)(Instructions);