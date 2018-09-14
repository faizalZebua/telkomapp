import React, { Component } from "react";

export default class Project extends Component {
    render () {
        return (
            <div>
                <div className="row mb-20">
                    <div className="col-sm-12">
                        <div className="card">
                            <h4>Que All Project</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <h4>Best Product Performance</h4>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <h4>Best Squad Performance</h4>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <h4>Talent</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}