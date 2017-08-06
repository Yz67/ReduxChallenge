import React from 'react';
import ReactModal from 'react-modal';

 class TimeSlot extends React.Component {

   constructor(){
     super();
     this.state = {
       modalSwitch: false,
       name: '',
       number: '',
     }
   }

   handleOpenModal(){
     this.setState({
       modalSwitch: true,
     })
   }

   handleCloseModal(){
     this.setState({
       modalSwitch: false,
     })

   }

   handleNameChange(name){
     this.setState({
       name: name
     })
   }

   handleNumberChange(number){
     this.setState({
       number: number,
     })
   }


    aggFunc(){
      this.handleCloseModal();
      return this.props.handleSubmit(this.props.box.hour, this.props.box.day, this.state.name, this.state.number);
    }

    clear(){
      this.handleCloseModal();
      this.setState({
        name: '',
        number:''
      })
    }


   render(){

     return (
       <div style={{alignItems: 'center', justifyContent: 'center', borderStyle: 'solid', borderWidth: 'medium', margin: 5, borderRadius: 5, width: 150, height: 50}}>
         <div style={{alignItems: 'center', textAlign: 'center'}} onClick={this.handleOpenModal.bind(this)}>
           {this.props.box.status || this.state.name === '' ? <div style={{backgroundColor: '#20B2AA', color: 'white'}}>{this.props.box.hour}</div> : <div style={{backgroundColor: '#F08080', color:'white'}}>{this.props.box.hour}</div>}

           <ReactModal
             isOpen={this.state.modalSwitch}
           contentLabel="Minimal Modal Example">
               <div>
                 Title: <input type='text' value={this.state.name} onChange={(e) => this.handleNameChange(e.target.value)}/>
                 <br></br>
                 Number: <input type='number' value={this.state.number} onChange={(e) => this.handleNumberChange(e.target.value)}/>
                 <br></br>

                 <button type="submit" onClick={() => this.aggFunc()}>Save</button>
                 <br></br>
                  <button onClick={this.handleCloseModal.bind(this)}>Close Modal</button>
                  <br></br>
                  <button onClick={this.clear.bind(this)}>Clear</button>

               </div>
               </ReactModal>
         </div>
       </div>
     )
   }
};

export default TimeSlot;
