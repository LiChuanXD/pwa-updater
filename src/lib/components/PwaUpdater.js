import React, { Component } from 'react';

const updateServiceWorker = reg => {
    if (reg.waiting) {
        reg.waiting.postMessage({ type: "SKIP_WAITING" });
        reg.waiting.addEventListener("statechange", e => {
            if (e.target.state === "activated") {
                console.log("target", e.target);
                window.location.reload();
            }
        });
    }
};

const containerStyle = {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    minWidth: "300px",
    maxWidth: "325px",
    height: "80px",
    borderRadius: "5px",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "row",
    transform: "translate(-50%, 0px)",
    overflow: "hidden",
    zIndex: 999,
    backgroundColor: "#eab000"
};

const secondaryStyle = {
    margin: 0,
    padding: 0,
    width: "6px",
    height: "100%",
    backgroundColor: "#ce9c09",
}

const primaryStyle = {
    margin: 0,
    padding: "8px 10px 8px 15px",
    width: "100%",
    height: "100%",
};

class PwaUpdater extends Component {
    constructor(props) {
        super(props);
        this.state = {
            update: false,
            registration: null
        };
    };

    updateState = registration => {
        this.setState({
            update: true,
            registration
        });
    };

    handleClick = () => {
        updateServiceWorker(this.state.registration);
        this.setState({
            ...this.state,
            update: false
        });
    };

    render() {
        const { notify } = this.props;
        document.addEventListener("updateServiceWorker", e => {
            const { waiting, registration } = e.detail;

            if (waiting && waiting === true && registration) {
                if (!notify) {
                    // no notify, straight refresh
                    updateServiceWorker(registration);
                } else {
                    // show notification
                    this.updateState(registration)
                }
            }
        });

        return (
            <>
                {
                    this.state.update && this.state.registration
                    ? (
                        <div id="pwa-updater" onClick={this.handleClick} style={this.state.update && this.state.registration ? containerStyle : { display: "none" }}>
                            <div id="secondary" style={secondaryStyle}></div>
                            <div id="primary" style={primaryStyle}>
                                <h6>Update Available</h6>
                                <p>Click to update application <strong> &gt; </strong></p>
                            </div>
                        </div>
                    )
                    : null
                }
            </>
        )
    }
};

export default PwaUpdater;