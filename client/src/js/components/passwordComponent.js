import React, { Component } from 'react';
import Rx from "rxjs/Rx";

export default class Password extends Component {

  constructor(props){
    super(props);

    this._passwordListJSX = <ul className="list-group">
                              {
                                this.props.passwords.map(singlePassword =>
                                  <li key={singlePassword} className="list-group-item">
                                    {singlePassword}
                                  </li>
                                )
                              }
                            </ul>;

    this._getPasswordButtonJSX = <div className="panel-footer">
                                  <button id="getPassword" className="btn btn-warning">
                                    click here
                                  </button>
                                </div>;

    this._fetchingPasswordFailedAlertJSX = <div className="alert alert-danger" role="alert">
                                            <strong>
                                              fetching passwords failed
                                            </strong>
                                          </div>;

    this._gettingPasswordAlertJSX = <div className="alert alert-info" role="alert">
                                      <strong>
                                        {"getting passwords. please wait..."}
                                      </strong>
                                    </div>;

    this._componentLayoutJSX = <div className="panel panel-default">
                                <div className="panel-body">
                                  {this._passwordListJSX}
                                </div>
                                {this._getPasswordButtonJSX}
                              </div>;

  }

  componentWillUpdate(){

    this._passwordListJSX = <ul className="list-group">
                              {
                                this.props.passwords.map(singlePassword =>
                                  <li key={singlePassword} className="list-group-item">
                                    {singlePassword}
                                  </li>
                                )
                              }
                            </ul>;

    if(this.props.passwordStatus === "none"){
      this._componentLayoutJSX = <div className="panel panel-default">
                                  <div className="panel-body">
                                    {this._passwordListJSX}
                                  </div>
                                  {this._getPasswordButtonJSX}
                                </div>;
    }else if(this.props.passwordStatus === "fetching-passwords"){
      this._componentLayoutJSX = <div className="panel panel-default">
                                  <div className="panel-body">
                                    {this._passwordListJSX}
                                    {this._gettingPasswordAlertJSX}
                                  </div>
                                  {this._getPasswordButtonJSX}
                                </div>;
    }else if(this.props.passwordStatus === "failed"){
      this._componentLayoutJSX = <div className="panel panel-default">
                                  <div className="panel-body">
                                    {this._passwordListJSX}
                                    {this._fetchingPasswordFailedAlertJSX}
                                  </div>
                                  {this._getPasswordButtonJSX}
                                </div>;
    }

  }

  render(){

    return <section>{this._componentLayoutJSX}</section>;

  }

  componentDidMount(){

    Rx.Observable.fromEvent(document.querySelector("#getPassword"), "click")
      .debounceTime(1000)
      .subscribe({
        next: () => this.props.getPasswords()
      });

  }

}
