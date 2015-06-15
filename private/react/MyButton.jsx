/* global React */

var MyButton = React.createClass({


    getInitialState: function() {

        return {text: '', labelCss: 'textInputField', debug: false};
    },

    onclick: function()
    {
        this.props.onAction();

    },

    render: function() {

        var styleValue = null;

        if (this.props.type=="Primary")
        {
             styleValue="primary";
        }
        return (
            <button  className={styleValue} onClick={this.onclick}>{this.props.text}</button>

        );
    }
});

// stop JShint complaining

MyButton = MyButton;
