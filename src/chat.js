import React, {Component } from 'react';

class KommunicateChat extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        (function(d, m){
            var kommunicateSettings = 
                {"appId":"2d362bc4f4cd44ee3ba19b43c8acab05d","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }
render() {
        return (
            <div></div>
        )
    }
}
export default KommunicateChat;




