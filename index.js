import React from 'react';
import ReactDOM from 'react-dom';
import { NetworkViewer } from 'network-viewer'; //npm install network-viewer

class App extends React.Component {

  render() {
    return (
        <div>
        {/* <h2>Snapshot for Failure</h2> */}
        <img src="./test.jpg" alt="Failure" />
        <h2>Logs</h2>
        <NetworkViewer
            file="./analytics-eu.cloud.com.har"
            scrollRequestPosition="near"
            options={{
              showTimeline: false,
              showImportHAR: false,
            }}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
