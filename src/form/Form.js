import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div>
        <form>
            Name: <input type="text"></input><br/><br/>
            E-mail: <input type="text"></input><br/><br/>
            Passwod: <input type="password"></input><br/><br/>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
