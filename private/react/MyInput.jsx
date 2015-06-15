/* global React */


var MyInput = React.createClass({

    clearAndSetFocus : function()
    {
        this.setState({text: ''}, function () {
            // This code executes after the component is re-rendered
            alert('focus');
            this.refs.theInput.getDOMNode().focus();   // Boom! Focused!

        });
    },

    setFocus : function()
    {
        this.refs.theInput.getDOMNode().focus();   // Boom! Focused!

    },

    getText: function()
    {
        return this.refs.theInput.getDOMNode().value;
    },
    getTextFromState: function()
    {
        return this.state.text;
    },

    setText: function() {

//        alert(this.state.text);
  //      this.setState({text: 'hello'});
    //    alert(this.state.text);

        this.state.text = "hello";
    },

    getInitialState: function() {


        return { text: this.props.text || '',
                 labelCss: 'textInputField', debug: false,
                  required: this.props.required || false};

    },

    isValid: function() {

        //TODO: add validation of email

        //if (  validateEmail(this.state.text) ) { return "Valid"}

        return "not valid";
    },

    onChange: function(e){

        this.setState({text: e.target.value});

        if ( this.props.model ) {
            this.props.model(this.props.modelName, e.target.value);
        }
        else
        {
            alert('no model');
        }
    },

    onclick: function()
    {
    },

    componentWillMount: function () {
    },

    componentWillUnmount: function () {

        alert('hi 4');
    },


    render: function() {

        var required = null;

        if (this.state.required ) {
            required = <span className='vdl_required_field'>*</span>
        }

        var labelClassName = "vdl_label";
        return (
            <div onClick={this.onclick}>
              {this.props.label ? <span className={labelClassName}>{this.props.label} {required} <br/></span> : '' }
                <input ref="theInput" className={this.state.labelCss} onChange={this.onChange} value={this.state.text} />
                { this.state.debug ? <p>Is this input field valid? {this.isValid()}</p> : ''}
            </div>

        );
    }
});

// stop JShint complaining

MyInput = MyInput;